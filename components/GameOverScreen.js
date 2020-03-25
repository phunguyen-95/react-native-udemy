import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>GameOverScreen</Text>
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
