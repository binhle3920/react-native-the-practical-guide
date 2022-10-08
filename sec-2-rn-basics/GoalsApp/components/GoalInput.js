import {Button, Image, Modal, StyleSheet, TextInput, View} from "react-native";
import React from "react";

const GoalInput = ({goalHandler, isVisible, onCancel}) => {
  const [enteredGoalText, setEnteredGoalText] = React.useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  }

  const addGoalHandler = () => {
    goalHandler(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
      <Modal visible={isVisible} animationType={'slide'}>
        <View style={styles.inputContainer}>
          <Image source={require('../assets/adaptive-icon.png')} style={styles.image} />
          <TextInput
            placeholder='Your course goal!'
            style={styles.textInput}
            onChangeText={goalInputHandler}
            value={enteredGoalText}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title='Add Goal' onPress={addGoalHandler} color='#B180F0' />
            </View>
            <View style={styles.button}>
              <Button title='Cancel' onPress={onCancel} color='#F31283'/>
            </View>
          </View>
        </View>
      </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#311B6B'
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#E4D0FF',
    backgroundColor: '#E4D0FF',
    width: '70%',
    padding: 16,
    color: '#120438',
    borderRadius: 6,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16
  },
  button: {
    width: '30%',
    marginHorizontal: 8,
  },
})

export default GoalInput
