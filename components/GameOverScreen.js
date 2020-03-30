import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const GameOverScreen = props => {
  const { rounds, onRestart, userNumber } = props;
  return (
    <View style={styles.screen}>
      <Text>Game is over</Text>
      <Text>Number of rounds: {rounds}</Text>
      <Text>Number was: {userNumber}</Text>
      <Button title="Start New Game" onPress={onRestart} />
    </View>
  );
};
export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
