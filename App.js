import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./components/GameOverScreen";
import { AppLoading } from "expo";

import * as Font from "expo-font";

const fetchFont = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/Open_Sans/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/Open_Sans/OpenSans-Bold.ttf")
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRound, setGuessRound] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  const startGameHandler = number => {
    setUserNumber(number);
    setGuessRound(0);
  };
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFont}
        onFinish={() => {
          return setDataLoaded(true);
        }}
        onError={() => {
          console.log("err");
        }}
      />
    );
  }

  const gameOverHandler = numberOfRounds => {
    setGuessRound(numberOfRounds);
  };

  const configureNewGameHandler = () => {
    setGuessRound(0);
    setUserNumber(null);
  };

  let content = <StartGameScreen startGameHandler={startGameHandler} />;
  if (userNumber && guessRound <= 0) {
    content = (
      <GameScreen userChoise={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRound > 0) {
    content = (
      <GameOverScreen
        userNumber={userNumber}
        rounds={guessRound}
        onRestart={configureNewGameHandler}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
