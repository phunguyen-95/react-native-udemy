import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import NumberInputContainer from "../components/NumberInputContainer";
import { Ionicons } from "@expo/vector-icons";
import Card from "../components/Card";
import TitleText from "../components/TitleText";
import Constant from "../constant/Common";
import DefaultStyle from "../constant/default-styles";
import MainButton from "../components/MainButton";
import BodyText from "../components/BodyText";

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
  const initialGuess = generateRandomBetween(
    currentLow.current,
    currentHigh.current,
    props.userChoise
  );

  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuessess, setPastGuessess] = useState([]);

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
      currentLow.current = currentGuess + 1;
    }

    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setRounds(currentRound => currentRound + 1);
    setPastGuessess(curPastGuesses => [nextNumber, ...curPastGuesses]);
  };
  const { userChoise, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === userChoise) {
      onGameOver(rounds);
    }
  }, [currentGuess, userChoise, onGameOver]);

  const renederItemList = (value, numberOfRound) => (
    <View key={value} style={styles.listItem}>
      <BodyText>#{numberOfRound}</BodyText>
      <BodyText>{value}</BodyText>
    </View>
  );

  return (
    <View style={styles.screen}>
      <TitleText style={DefaultStyle.bodyText}>Opponent's guess</TitleText>
      <NumberInputContainer>
        <Text>{currentGuess}</Text>
      </NumberInputContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={nextGuessHandler.bind(this, Constant.LOWER)}>
          <Ionicons name="md-remove" size={24} color="white" />
        </MainButton>
        <MainButton onPress={nextGuessHandler.bind(this, Constant.GREATER)}>
          <Ionicons name="md-add" size={24} color="white" />
        </MainButton>
      </Card>
      <View style={styles.list}>
        <ScrollView>
          {pastGuessess.map(guess => renederItemList(guess, rounds))}
        </ScrollView>
      </View>
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
  },
  list: { width: "80%" },
  listItem: {
    borderColor: "#ccc",
    padding: 15,
    marginVertical: 10,
    backgroundColor: "white",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  }
});

export default GameScreen;
