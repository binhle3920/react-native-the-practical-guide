import React from 'react';
import {Image, Platform, Pressable, StyleSheet, Text, View} from "react-native";
import Colors from "../utils/colors";
import {useNavigation} from "@react-navigation/native";
import MealDetails from "./MealDetails";

const MealItem = ({ id, title, imageUrl, duration, complexity, affordability }) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('MealDetail', {
      mealId: id,
    })
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
          android_ripple={{ color: Colors.light_gray }}
          style={({pressed}) => [pressed && styles.buttonPressed]}
          onPress={onPress}>
        <View>
          <View>
            <Image source={{uri: imageUrl}} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.divider}></View>
          <MealDetails
              duration={duration}
              complexity={complexity}
              affordability={affordability} />
        </View>
      </Pressable>
    </View>
  )
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    overflow: Platform.select({android: 'hidden'})
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8
  },
  title: {
    fontFamily: 'roboto-bold',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 16,
    marginBottom: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.light_gray,
    marginHorizontal: 8
  }
});
