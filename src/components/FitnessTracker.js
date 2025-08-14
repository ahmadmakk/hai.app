import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const FitnessTracker = () => {
  const [activity, setActivity] = useState('');
  const [calories, setCalories] = useState('');
  const [goal, setGoal] = useState('');
  const [activities, setActivities] = useState([]);

  const handleAddActivity = () => {
    if (activity && calories) {
      setActivities([...activities, { activity, calories: parseInt(calories) }]);
      setActivity('');
      setCalories('');
    }
  };

  const totalCaloriesBurned = activities.reduce((total, item) => total + item.calories, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fitness Tracker</Text>
      <TextInput
        style={styles.input}
        placeholder="Activity"
        value={activity}
        onChangeText={setActivity}
      />
      <TextInput
        style={styles.input}
        placeholder="Calories Burned"
        value={calories}
        keyboardType="numeric"
        onChangeText={setCalories}
      />
      <Button title="Add Activity" onPress={handleAddActivity} />
      <Text style={styles.goal}>Fitness Goal: {goal} calories</Text>
      <Text style={styles.total}>Total Calories Burned: {totalCaloriesBurned}</Text>
      <FlatList
        data={activities}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.activity}>{item.activity}: {item.calories} calories</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  goal: {
    marginTop: 20,
    fontSize: 16,
  },
  total: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  activity: {
    marginTop: 5,
    fontSize: 14,
  },
});

export default FitnessTracker;