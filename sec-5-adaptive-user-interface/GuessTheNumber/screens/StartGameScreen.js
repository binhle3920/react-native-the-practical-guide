import React from "react";
import {StyleSheet, TextInput, View, Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView} from "react-native";

import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

const StartGameScreen = ({onPickNumber}) => {
  const [enteredNumber, setEnteredNumber] = React.useState('0');

  const { width, height } = useWindowDimensions();

  const numberInputHandler = (enteredText) => setEnteredNumber(enteredText);

  const resetInputHandler = () => {
    setEnteredNumber('0');
  }

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
          'Invalid number!',
          'Number has to be a number between 1 and 99.',
          [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}])
      return;
    }

    onPickNumber(chosenNumber)
  }

  const marginTop = height < 400 ? 30 : 100;

  return (
      <ScrollView style={styles.screen}>
        <KeyboardAvoidingView style={styles.screen} behavior='position'>
          <View style={[styles.rootContainer, {marginTop: marginTop}]}>
            <Title>Guess My Number</Title>
            <Card>
              <InstructionText>Enter a Number</InstructionText>
              <TextInput
                  style={styles.numberInput}
                  maxLength={2}
                  keyboardType='number-pad'
                  defaultValue='0'
                  autoCorrect={false}
                  onChangeText={numberInputHandler}
                  value={enteredNumber} />
              <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                  <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                  <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
              </View>
            </Card>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    alignItems: 'center'
  },
  numberInput: {
    height: 50,
    width: 70,
    fontSize: 32,
    borderBottomColor: Colors.secondary500,
    borderBottomWidth: 2,
    color: Colors.secondary500,
    marginVertical: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1
  },
});

export default StartGameScreen
