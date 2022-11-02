import {Image, ScrollView, StyleSheet, Text, View} from "react-native";

import OutlinedButton from "../components/ui/OutlinedButton";
import {Colors} from "../constants/colors";
import {useEffect} from "react";

const PlaceDetail = ({route}) => {
  const selectedPlaceId = route.params.placeId;

  const showOnMapHandler = () => {

  };

  useEffect(() => {
    // Use selectedPlaceId to fetch data for a single place
  }, [selectedPlaceId]);

  return (
    <ScrollView>
      <Image style={styles.image} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}></Text>
        </View>
        <OutlinedButton icon="map" onPress={showOnMapHandler}>View on Map</OutlinedButton>
      </View>
    </ScrollView>
  );
};

export default PlaceDetail;

const styles = StyleSheet.create({
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%"
  },
  locationContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary500,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16
  }
});
