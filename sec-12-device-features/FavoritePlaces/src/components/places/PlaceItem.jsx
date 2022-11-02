import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {Colors} from "../../constants/colors";

const PlaceItem = ({place, onSelect}) => {
  return (
    <Pressable onPress={onSelect.bind(this, place.id)} style={({pressed}) => [styles.item, pressed && styles.pressed]}>
      <Image style={styles.image} source={{uri: place.item.imageUri}} />
      <View style={styles.info}>
        <Text style={styles.title}>{place.item.title}</Text>
        <Text>{place.item.address}</Text>
      </View>
    </Pressable>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "flex-start",
    borderRadius: 6,
    marginVertical: 12,
    backgroundColor: Colors.primary500,
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 2,
  },
  pressed: {
    opacity: 0.75
  },
  image: {
    flex: 1,
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
    height: 100
  },
  info: {
    flex: 2,
    padding: 12
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.gray700
  },
  address: {
    color: Colors.gray700,
    fontSize: 12
  }
})
