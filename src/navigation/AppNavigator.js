import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import KitchenScreen from '../screens/KitchenScreen';
import FitnessScreen from '../screens/FitnessScreen';
import BodyVisualizationScreen from '../screens/BodyVisualizationScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Kitchen" component={KitchenScreen} />
        <Stack.Screen name="Fitness" component={FitnessScreen} />
        <Stack.Screen name="Body Visualization" component={BodyVisualizationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;