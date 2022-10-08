import {Button, FlatList, StyleSheet, View} from 'react-native';
import React from "react";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import {StatusBar} from "expo-status-bar";

const App = () => {
  const [modalIsVisible, setModalIsVisible] = React.useState(false);
  const [courseGoals, setCourseGoals] = React.useState([]);

  const startAddGoalHandler = () => setModalIsVisible(true);
  const endAddGoalHandler = () => setModalIsVisible(false);

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [
        ...currentCourseGoals,
        { text: enteredGoalText, id: Math.random().toString() }
    ]);
    endAddGoalHandler();
  }

  const deleteGoalHandler = (id) => {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button title={'Add new Goal'} color={'#A065EC'} onPress={startAddGoalHandler} />
        <GoalInput goalHandler={addGoalHandler} isVisible={modalIsVisible} onCancel={endAddGoalHandler}/>
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            renderItem={itemData => {
              return (
                <GoalItem item={itemData.item} onDeleteItem={deleteGoalHandler}/>
              );
            }} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 6,
  },
});

export default App
