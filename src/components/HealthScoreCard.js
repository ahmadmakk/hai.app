import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HealthScoreCard = ({ healthScores }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Health Scores</Text>
      {Object.entries(healthScores).map(([organ, score]) => (
        <View key={organ} style={styles.scoreContainer}>
          <Text style={styles.organ}>{organ}</Text>
          <Text style={[styles.score, score < 50 ? styles.low : styles.high]}>
            {score}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.5,
    elevation: 5,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  organ: {
    fontSize: 16,
  },
  score: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  low: {
    color: 'red',
  },
  high: {
    color: 'green',
  },
});

export default HealthScoreCard;