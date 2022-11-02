import {StyleSheet, Text, View} from "react-native";
import {getCurrentPositionAsync, useForegroundPermissions} from "expo-location";
import {useEffect, useState} from "react";
import {useIsFocused, useNavigation, useRoute} from "@react-navigation/native";

import OutlinedButton from "../ui/OutlinedButton";
import {Colors} from "../../constants/colors";
import {verifyPermission} from "../../utils/permission";

const LocationPicker = ({onLocationPicked}) => {
  const [pickedLocation, setPickedLocation] = useState();
  const [locationPermissionInformation, requestPermission] = useForegroundPermissions();
  const navigation = useNavigation();
  const route = useRoute();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused && route.params) {
      const mapPickedLocation = route.params && {
        lat: route.params.pickedLat,
        lng: route.params.pickedLng
      };

      setPickedLocation(mapPickedLocation);
      onLocationPicked(mapPickedLocation);
    }
  }, [route, isFocused]);

  useEffect(() => {
    onLocationPicked(pickedLocation);
  }, [pickedLocation, onLocationPicked]);

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermission(
      locationPermissionInformation.status,
      requestPermission,
      "foreground"
    );

    if (!hasPermission) {
      return;
    }

    const location = await getCurrentPositionAsync();
    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude
    });
  };

  const pickOnMapHandler = () => {
    navigation.navigate("Map");
  };

  let locationPreview = <Text style={styles.fallbackText}>No location picked yet.</Text>

  if (pickedLocation) {
    locationPreview = (
      <>
        <Text>lat: {pickedLocation.lat}</Text>
        <Text>lng: {pickedLocation.lng}</Text>
      </>
    )
  }

  return (
    <View>
      <View style={styles.mapPreview}>
        {locationPreview}
      </View>
      <View style={styles.actions}>
        <OutlinedButton
          icon="location"
          onPress={getLocationHandler}
        >
          Located User
        </OutlinedButton>
        <OutlinedButton
          icon="map"
          onPress={pickOnMapHandler}
        >
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  )
};

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
    borderColor: Colors.primary500,
    borderWidth: 2,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  fallbackText: {
    fontStyle: "italic"
  }
})
