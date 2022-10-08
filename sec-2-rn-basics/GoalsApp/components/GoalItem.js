import {Text, View, StyleSheet, Pressable} from "react-native";
import React from "react";

const GoalItem = ({ item, onDeleteItem }) => {
  return (
      <View style={styles.goalItems}>
        <Pressable
          android_ripple={{color: '#DDDDDD'}}
          onPress={onDeleteItem.bind(this, item.id)}
          style={({pressed}) => pressed && styles.pressedItem}>
              <Text style={styles.text}>{item.text}</Text>
        </Pressable>
      </View>
  )
}

const styles = StyleSheet.create({
  goalItems: {
    margin: 8,
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 6,
    backgroundColor: '#ab19f8',
  },
  text: {
    color: '#FFFFFF'
  },
  pressedItem: {
    opacity: 0.5,
  }
})

export default GoalItem
