import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import KitchenMacros from '../components/KitchenMacros';

const KitchenScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kitchen Macros Tracker</Text>
      <KitchenMacros />
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

export default KitchenScreen;