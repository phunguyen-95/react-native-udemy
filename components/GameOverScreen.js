import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import successImage from "../assets/images/success.png";
import { hidden } from "ansi-colors";

const GameOverScreen = props => {
  const { rounds, onRestart, userNumber } = props;
  return (
    <View style={styles.screen}>
      <Text>Game is over</Text>
      <View style={styles.imageContianer}>
        <Image
          source={{
            uri:
              "https://moderndiplomacy.eu/wp-content/uploads/2018/08/uzbekistan-forests.jpg"
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

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
  },
  image: {
    width: "100%",
    height: "100%"
  },
  imageContianer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderColor: "black",
    borderWidth: 1,
    overflow: "hidden"
  }
});
