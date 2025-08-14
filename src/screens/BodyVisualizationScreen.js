import React from 'react';
import { View, StyleSheet } from 'react-native';
import Body3DModel from '../components/Body3DModel';
import HealthScoreCard from '../components/HealthScoreCard';

const BodyVisualizationScreen = () => {
  // Sample data for health scores, this should be replaced with actual user data
  const healthScores = {
    heart: 85,
    lungs: 90,
    liver: 75,
    kidneys: 80,
  };

  return (
    <View style={styles.container}>
      <Body3DModel />
      <HealthScoreCard scores={healthScores} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BodyVisualizationScreen;