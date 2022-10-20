import React from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, Text, useWindowDimensions, View} from "react-native";

import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = ({ roundsNumber, userNumber, onRestart}) => {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;
  if (width < 380) {
    imageSize = 150;
  }
  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  }

  return (
      <ScrollView style={styles.screen}>
        <View style={styles.rootContainer}>
          <Title>GAME OVER!</Title>
          <View style={styles.imageContainer}>
            <Image style={[styles.image, imageStyle]} source={require('../assets/images/success.webp')} />
          </View>
          <Text style={styles.summaryText}>
            Your phone needed <Text style={styles.highlight}>{roundsNumber} </Text>
            rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>.
          </Text>
          <PrimaryButton onPress={onRestart}>Start New Game</PrimaryButton>
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 24
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500
  }
})

export default GameOverScreen
