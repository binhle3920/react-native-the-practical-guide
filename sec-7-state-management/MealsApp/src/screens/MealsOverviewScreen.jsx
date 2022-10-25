import React from 'react';

import {MEALS, CATEGORIES} from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

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

  return <MealsList items={displayMeals} />
}

export default MealsOverviewScreen;
