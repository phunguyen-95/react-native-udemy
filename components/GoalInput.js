import React from "react";
import { View, TextInput, StyleSheet, Modal, Button } from "react-native";

const GoalInput = props => {
  return (
    <Modal visible={props.visible} animated="slide">
      <View style={styles.screen}>
        <TextInput
          style={styles.input}
          placeHolder="Goal"
          onChangeText={props.goalChangeHandler}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Add"
            onPress={() => {
              props.addGoalHandler(props.goal);
            }}
          />
          <Button title="Canel" color="red" onPress={props.closeModal} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#bbb",
    padding: 10,
    color: "green"
  },
  screen: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around"
  }
});

export default GoalInput;
