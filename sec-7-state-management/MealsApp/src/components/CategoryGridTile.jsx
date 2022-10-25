import React from 'react';
import {Platform, Pressable, StyleSheet, Text, View} from "react-native";
import Colors from "../utils/colors";

const CategoryGridTile = ({title, color, onPress}) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
          android_ripple={{ color: Colors.light_gray }}
          style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}
          onPress={onPress}>
        <View style={[styles.innerContainer, {backgroundColor: color}]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    backgroundColor: Colors.white,
    // Android shadow
    elevation: 4,
    // IOS shadow
    shadowColor: Colors.shadow,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    overflow: Platform.select({android: 'hidden'})
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },
  title: {
    fontFamily: 'roboto',
    fontSize: 16,
    textAlign: 'center'
  }
});
