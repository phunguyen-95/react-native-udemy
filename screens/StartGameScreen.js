import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";
import Card from "../components/Card";
import Colors from "../constant/Colors";
import Input from "../components/Input";
import NumberInputContainer from "../components/NumberInputContainer";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";

const StartGameScreen = props => {
  const { startGameHandler } = props;
  const [enteredValue, setEnteredValue] = useState();
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState("");

  const numberInputHandler = value => {
    setEnteredValue(value);
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const choosenNumber = parseInt(enteredValue);
    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert("Invalid Value", "Nunber should between 1 and 99!", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler }
      ]);
      return;
    }

    setConfirmed(true);
    setSelectedNumber(choosenNumber);
    setEnteredValue("");
    Keyboard.dismiss();
  };

  let confirmedComponent = undefined;
  if (confirmed) {
    confirmedComponent = (
      <Card style={styles.summaryContainer}>
        <TitleText>Selected Number</TitleText>
        <NumberInputContainer>{selectedNumber}</NumberInputContainer>

        <MainButton
          onPress={() => {
            startGameHandler(selectedNumber);
          }}
        >
          START GAME
        </MainButton>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <BodyText style={styles.title}>The Start Screen</BodyText>
        <Card style={styles.inputContainer}>
          <BodyText>Select a Number</BodyText>
          <Input
            value={enteredValue}
            keyboardType="numeric"
            maxLength={2}
            autoCorrect={false}
            blurOnSubmit
            autoCapitalize="none"
            onChangeText={numberInputHandler}
          />
          <View style={styles.buttonContainer}>
            <Button
              title="Reset"
              onPress={resetInputHandler}
              color={Colors.primary}
            />
            <Button
              title="Confirm"
              onPress={confirmInputHandler}
              color={Colors.accent}
            />
          </View>
        </Card>
        {confirmedComponent}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 10, alignItems: "center" },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: "open-sans-bold"
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
  },

  summaryContainer: {
    alignContent: "center",
    marginTop: 20,
    width: "80%"
  },
  choosenNumber: {
    color: "blue",
    fontSize: 18,
    fontWeight: "bold"
  }
});

export default StartGameScreen;
