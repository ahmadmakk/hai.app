import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FitnessTracker from '../components/FitnessTracker';

const FitnessScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fitness Tracking</Text>
      <FitnessTracker />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default FitnessScreen;