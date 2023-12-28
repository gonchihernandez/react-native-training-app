import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StackNavigator from './StackNavigator';

import HomeScreen from '../pages/Home';
import NewWorkoutScreen from '../pages/NewWorkout';
import WorkoutScreen from '../pages/Workout';
import FitScreen from '../pages/Fit';
import RestScreen from '../pages/Rest';

//Screen names
const homeName = 'Home';
const addWorkout = 'Add Workout';
const settingsName = 'Settings';

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (rn === addWorkout) {
            iconName = focused ? 'weight-lifter' : 'weight-lifter';
          } else if (rn === settingsName) {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          // You can return any component that you like here!
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: '#f5bf42',
        inactiveTintColor: 'grey',
        labelStyle: { paddingBottom: 10, fontSize: 10 },
        style: { padding: 10, height: 300 },
      }}
    >
      <Tab.Screen
        options={{ headerShown: false }}
        name={homeName}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name={addWorkout}
        component={NewWorkoutScreen}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
