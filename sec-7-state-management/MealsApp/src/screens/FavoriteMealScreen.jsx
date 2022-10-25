import React, {useContext} from "react";

import MealsList from "../components/MealsList/MealsList";
import {FavoritesContext} from "../store/context/favorites-context";
import {MEALS} from "../data/dummy-data";
import {StyleSheet, Text, View} from "react-native";
import Colors from "../utils/colors";
import {useSelector} from "react-redux";

const FavoriteMealScreen = () => {
  // const favoriteMealCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids)

  const favoriteMeals = MEALS.filter((meal) => favoriteMealIds.includes(meal.id));

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals}/>
}

export default FavoriteMealScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontFamily: 'roboto-italic',
    color: Colors.white
  }
})
