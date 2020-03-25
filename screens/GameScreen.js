import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import NumberInputContainer from "../components/NumberInputContainer";
import Card from "../components/Card";
import CustomeTitle from "../components/CustomTitle";
import Constant from "../constant/Common";
const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rnNum = Math.floor(Math.random() * (max - min)) + min;
  if (exclude === rnNum) {
    generateRandomBetween(min, max, exclude);
  } else {
    return rnNum;
  }
};

const GameScreen = props => {
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      props.userChoise
    )
  );

  const [rounds, setRounds] = useState(0);

  const nextGuessHandler = direction => {
    const isWrongDirection =
      (direction.toLowerCase() === Constant.LOWER.toLowerCase() &&
        currentGuess <= props.userChoise) ||
      (direction.toLowerCase() === Constant.GREATER.toLowerCase() &&
        currentGuess > props.userChoise);
    if (isWrongDirection) {
      Alert.alert("Don' t lie!", "You know this is not true...", [
        { text: "Sorry", style: "cancel" }
      ]);
      return;
    }
    if (direction.toLowerCase() === Constant.LOWER.toLowerCase()) {
      currentHigh.current = currentGuess;
    }
    if (direction.toLowerCase() === Constant.GREATER.toLowerCase()) {
      currentLow.current = currentGuess;
    }

    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setRounds(currentRound => currentRound + 1);
  };
  const { userChoise, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === userChoise) {
      onGameOver(rounds);
    }
  }, [currentGuess, userChoise, onGameOver]);

  return (
    <View style={styles.screen}>
      <CustomeTitle>Opponent's guess</CustomeTitle>
      <NumberInputContainer>
        <Text>{currentGuess}</Text>
      </NumberInputContainer>
      <Card style={styles.buttonContainer}>
        <Button
          title={Constant.LOWER.toUpperCase()}
          onPress={nextGuessHandler.bind(this, Constant.LOWER)}
        />
        <Button
          title={Constant.GREATER.toUpperCase()}
          onPress={nextGuessHandler.bind(this, Constant.GREATER)}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20
  }
});

export default GameScreen;
