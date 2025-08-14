import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Card = ({ title, value, unit }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardValue}>
      {value} <Text style={styles.cardUnit}>{unit}</Text>
    </Text>
  </View>
);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>My Health Dashboard</Text>

      <View style={styles.grid}>
        <Card title="Steps Today" value="5,432" unit="steps" />
        <Card title="Water" value="1.8" unit="L" />
        <Card title="Heart Rate" value="72" unit="bpm" />
      </View>

      <TouchableOpacity style={styles.cta}>
        <Text style={styles.ctaText}>Add Log</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0e1116', padding: 16 },
  heading: { color: 'white', fontSize: 24, fontWeight: '700', marginBottom: 12, textAlign: 'center' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  card: {
    width: '48%',
    backgroundColor: '#18202a',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
  },
  cardTitle: { color: '#a8b3c3', fontSize: 12, marginBottom: 6 },
  cardValue: { color: 'white', fontSize: 22, fontWeight: '700' },
  cardUnit: { color: '#a8b3c3', fontSize: 14, fontWeight: '500' },
  cta: {
    marginTop: 8,
    backgroundColor: '#2f80ed',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  ctaText: { color: 'white', fontWeight: '700', fontSize: 16 },
});
