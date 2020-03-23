import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constant/Colors";
import { bold } from "ansi-colors";

const NumberInputContainer = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.number} color={Colors.accent}>
        {props.children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  number: {
    fontSize: 18,
    color: Colors.accent,
    fontWeight: "bold"
  }
});
export default NumberInputContainer;
