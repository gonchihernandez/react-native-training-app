import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ROUTES } from '../utils/constants';

import TabsNavigator from './TabsNavigator';

import LoginScreen from '../pages/Login';
import HomeScreen from '../pages/Home';
import WorkoutScreen from '../pages/Workout';
import FitScreen from '../pages/Fit';
import RestScreen from '../pages/Rest';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const { HOME, NEW_WORKOUT, LOGIN, WORKOUT, FIT, REST } = ROUTES;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name={LOGIN}
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name={HOME}
          component={TabsNavigator}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name={WORKOUT}
          component={WorkoutScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name={FIT}
          component={FitScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name={REST}
          component={RestScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
