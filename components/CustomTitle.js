import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CustomeTitle = props => {
  return (
    <View>
      <Text style={{ ...styles.title, ...props.title }}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "400",
    fontSize: 16,
    paddingTop: 6,
    paddingBottom: 6
  }
});
export default CustomeTitle;
