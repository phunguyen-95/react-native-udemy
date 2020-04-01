import React from "react";
import { View, Text, StyleSheet } from "react-native";
import defaultStyles from "../constant/default-styles";
import TitleText from "./TitleText";

const Header = props => {
  return (
    <View style={styles.header}>
      <TitleText style={defaultStyles.title}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: "#f7287b",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "open-sans"
  },
  title: {
    fontSize: 20,
    color: "black"
  }
});

export default Header;
