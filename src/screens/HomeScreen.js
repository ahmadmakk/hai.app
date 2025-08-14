import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Health AI App</Text>
      <Text style={styles.subtitle}>Your personal health dashboard</Text>
      <Text style={styles.description}>
        Track your kitchen macros, fitness activities, and visualize your health scores.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  description: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
  },
});

export default HomeScreen;