import React from 'react';
import {FlatList, StyleSheet, View} from "react-native";

import {MEALS, CATEGORIES} from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  const displayMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catId) >= 0;
  })

  React.useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;

    navigation.setOptions({
      title: categoryTitle
    })
  }, [])


  const renderMealItem = (itemData) => {
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability
    }

    return <MealItem {...mealItemProps} />
  }

  return (
      <View style={styles.container}>
        <FlatList
            data={displayMeals}
            keyExtractor={(item) => item.id}
            renderItem={renderMealItem} />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  }
})

export default MealsOverviewScreen;
