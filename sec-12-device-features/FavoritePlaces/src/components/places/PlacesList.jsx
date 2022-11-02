import {FlatList, StyleSheet, Text, View} from "react-native";

import PlaceItem from "./PlaceItem";
import {Colors} from "../../constants/colors";
import {useNavigation} from "@react-navigation/native";

const PlacesList = ({places}) => {
  const navigation = useNavigation();

  const onSelectPlace = (placeId) => {
    navigation.navigate("PlaceDetail", {placeId: placeId});
  }

  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>No places added yet - start adding some!</Text>
      </View>
    )
  }

  return (
    <FlatList
      style={styles.list}
      data={places}
      keyExtractor={(place) => place.id}
      renderItem={(place) => <PlaceItem place={place} onSelect={onSelectPlace} />}
    />
  );
}

export default PlacesList;

const styles = StyleSheet.create({
  list: {
    margin: 24,
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.primary200
  }
});
