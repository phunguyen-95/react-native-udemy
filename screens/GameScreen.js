import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import NumberInputContainer from "../components/NumberInputContainer";
import Card from "../components/Card";

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
  const {} = props;
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  );
  return (
    <View style={styles.screen}>
      <Text>Game screen</Text>
      <NumberInputContainer>
        <Text>{currentGuess}</Text>
      </NumberInputContainer>
      <Card style={styles.buttonContainer}>
        <Button title="LOWER" onPress={() => {}} />
        <Button title="GREATER" onPress={() => {}} />
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
