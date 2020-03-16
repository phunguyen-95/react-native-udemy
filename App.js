import React, { useState } from "react";
import GoalItem from "./components/GoalItem";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  FlatList
} from "react-native";
import GoalInput from "./components/GoalInput";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameSreen";

export default function App() {
  const [goal, setGoal] = useState("");
  const [visible, setVisible] = useState(false);
  const [courseGoal, setCourseGoal] = useState([
    {
      id: Math.random().toString(),
      value: "Goal 1"
    }
  ]);
  const goalChangeHandler = value => {
    setGoal(value);
  };

  const addGoalHandler = goal => {
    setCourseGoal([
      ...courseGoal,
      { id: Math.random().toString(), value: goal }
    ]);
    setVisible(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoal(courseGoal => courseGoal.filter(f => f.id !== goalId));
  };

  const closeModal = () => {
    setVisible(false);
  };
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
