import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = props => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.onDelete(props.goalId);
      }}
    >
      <View style={styles.item}>
        <Text>{props.title || ""}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    borderColor: "#bbb",
    borderWidth: 1,
    backgroundColor: "#eee",
    padding: 12,
    marginTop: 8
  }
});
export default GoalItem;
