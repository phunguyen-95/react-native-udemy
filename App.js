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
    <View style={styles.container}>
      <Button
        title="Add New Goal"
        visible={false}
        onPress={() => setVisible(!visible)}
      />

      <GoalInput
        visible={visible}
        goal={goal}
        addGoalHandler={addGoalHandler}
        goalChangeHandler={goalChangeHandler}
        closeModal={closeModal}
      />

      <ScrollView>
        <FlatList
          keyExtractor={item => item.id}
          data={courseGoal}
          renderItem={({ item }) => (
            <GoalItem
              title={item.value}
              goalId={item.id}
              onDelete={removeGoalHandler}
            />
          )}
        ></FlatList>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  }
});
