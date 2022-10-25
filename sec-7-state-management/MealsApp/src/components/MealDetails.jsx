import {StyleSheet, Text, View} from "react-native";
import React from "react";

const MealDetails = ({duration, complexity, affordability, style, textStyle}) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[textStyle]}>{duration}m</Text>
      <Text style={[textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  )
}

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    margin: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
});
