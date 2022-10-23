import React from "react";
import {Button, Image, ScrollView, StyleSheet, Text, View} from "react-native";

import {MEALS} from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Colors from "../utils/colors";
import MealSubtitle from "../components/MealDetail/MealSubtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";


const MealDetailScreen = ({ route, navigation }) => {
  const meal = MEALS.find((meal) => meal.id === route.params.mealId);

  const headerButtonPressHandler = () => {
    console.log('PRESSED!');
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: meal.title,
      headerRight: () => {
        return <IconButton iconName="star" onPress={headerButtonPressHandler}/>
      }
    })
  }, [navigation, headerButtonPressHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{uri: meal.imageUrl}} style={styles.image}/>
      <Text style={styles.title}>{meal.title}</Text>
      <MealDetails
          duration={meal.duration}
          complexity={meal.complexity}
          affordability={meal.affordability}
          textStyle={styles.detailText}/>

      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <MealSubtitle>Ingredients</MealSubtitle>
          <List data={meal.ingredients} />

          <MealSubtitle>Steps</MealSubtitle>
          <List data={meal.steps} />
        </View>
      </View>
    </ScrollView>
  )
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32
  },
  image: {
    width: '100%',
    height: 350,
    borderWidth: 1,
    borderColor: Colors.white,
    borderRadius: 8
  },
  title: {
    fontFamily: 'roboto-bold',
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: Colors.white,
  },
  detailText: {
    color: Colors.white
  },
  listOuterContainer: {
    alignItems: 'center'
  },
  listContainer: {
    width: '80%'
  }
})
