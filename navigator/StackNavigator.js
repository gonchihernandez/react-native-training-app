import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabsNavigator from './TabsNavigator';

import LoginScreen from '../pages/Login';
import HomeScreen from '../pages/Home';
import WorkoutScreen from '../pages/Workout';
import FitScreen from '../pages/Fit';
import RestScreen from '../pages/Rest';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name='Login'
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name='Home'
          component={TabsNavigator}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name='Workout'
          component={WorkoutScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name='Fit'
          component={FitScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name='Rest'
          component={RestScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
