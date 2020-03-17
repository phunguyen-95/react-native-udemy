import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import Card from "../components/Card";
import Colors from "../constant/Colors";
import Input from "../components/Input";

const StartGameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>The Start Screen</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <Input keyboardType="numeric" maxLength={2} />
        <View style={styles.buttonContainer}>
          <Button title="Reset" onPress={() => {}} color={Colors.primary} />
          <Button title="Cancel" onPress={() => {}} color={Colors.accent} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 10, alignItems: "center" },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%"
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 15
  }
});

export default StartGameScreen;
