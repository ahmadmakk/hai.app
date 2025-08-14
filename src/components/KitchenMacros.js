import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const KitchenMacros = () => {
  const [currentMacros, setCurrentMacros] = useState({ protein: 0, carbs: 0, fats: 0 });
  const [goalMacros, setGoalMacros] = useState({ protein: 0, carbs: 0, fats: 0 });

  const handleCurrentChange = (type, value) => {
    setCurrentMacros({ ...currentMacros, [type]: value });
  };

  const handleGoalChange = (type, value) => {
    setGoalMacros({ ...goalMacros, [type]: value });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Kitchen Macros Tracker</Text>
      
      <Text style={styles.label}>Current Macros</Text>
      {['protein', 'carbs', 'fats'].map((macro) => (
        <View key={macro} style={styles.inputContainer}>
          <Text>{macro.charAt(0).toUpperCase() + macro.slice(1)}:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={String(currentMacros[macro])}
            onChangeText={(value) => handleCurrentChange(macro, value)}
          />
        </View>
      ))}

      <Text style={styles.label}>Goal Macros</Text>
      {['protein', 'carbs', 'fats'].map((macro) => (
        <View key={macro} style={styles.inputContainer}>
          <Text>{macro.charAt(0).toUpperCase() + macro.slice(1)}:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={String(goalMacros[macro])}
            onChangeText={(value) => handleGoalChange(macro, value)}
          />
        </View>
      ))}

      <Button title="Save Macros" onPress={() => {/* Handle save logic */}} />
      
      <View style={styles.statsContainer}>
        <Text style={styles.statsHeader}>Current Macros Stats</Text>
        <Text>Protein: {currentMacros.protein}g</Text>
        <Text>Carbs: {currentMacros.carbs}g</Text>
        <Text>Fats: {currentMacros.fats}g</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginTop: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginLeft: 10,
    flex: 1,
  },
  statsContainer: {
    marginTop: 20,
  },
  statsHeader: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default KitchenMacros;