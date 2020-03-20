import React from "react";
import { View, StyleSheet } from "react-native";
import Card from "./Card";
import Colors from "../constant/Colors";

const NumberInputContainer = props => {
  return <View style={styles.number}>{props.children}</View>;
};

const styles = StyleSheet.create({
  number: {
    borderWidth: 2,
    borderColor: Colors.accent,
    borderRadius: 4,
    padding: 6
  }
});
export default NumberInputContainer;
