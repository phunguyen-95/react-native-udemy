import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const StartGameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a new game</Text>
      <View style={styles.inputContainer}>
        <Text>Select a number</Text>
        <TextInput placeholder="Select a number" />
        <View style={styles.buttonContainer}>
          <Button title="Reset" onPress={() => {}} />
          <Button title="Confirm" onPress={() => {}} />
        </View>
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
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center"
  },

  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around"
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  }
});

export default StartGameScreen;
