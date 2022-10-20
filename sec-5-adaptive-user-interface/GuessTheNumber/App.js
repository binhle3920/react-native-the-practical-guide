import {StyleSheet, ImageBackground, SafeAreaView, View} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import {StatusBar} from "expo-status-bar";
import React from "react";
import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNumber, setUserNumber] = React.useState();
  const [gameIsOver, setGameIsOver] = React.useState(false);
  const [guessRounds, setGuessRounds] = React.useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const pickedNumberHandler = (pickedNumber) => setUserNumber(pickedNumber);
  const gameOverHandler = (guessRounds) => {
    setGameIsOver(true);
    setGuessRounds(guessRounds);
  }
  const startNewGameHandler = () => {
    setUserNumber(0);
    setGuessRounds(0);
    setGameIsOver(false);
  }


  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }
  if (gameIsOver) {
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onRestart={startNewGameHandler}/>
  }

  return (
    <View onLayout={onLayoutRootView} style={styles.rootScreen}>
      <LinearGradient colors={[Colors.primary800, Colors.secondary500]} style={styles.rootScreen}>
        <StatusBar style='light'/>
        <ImageBackground
          source={require('./assets/images/background.jpg')}
          resizeMode='cover'
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>
            {screen}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.15
  }
});
