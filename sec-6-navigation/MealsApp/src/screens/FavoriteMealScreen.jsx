import {StyleSheet, Text, View} from "react-native";

const FavoriteMealScreen = () => {
  return (
      <View style={styles.rootScreen}>
        <Text>Favorite Meal Screen</Text>
      </View>
  )
}

export default FavoriteMealScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
})
