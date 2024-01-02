import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import { ROUTES } from '../utils/constants';

import StackNavigator from './StackNavigator';

import HomeScreen from '../pages/Home';
import NewWorkoutScreen from '../pages/NewWorkout';
import WorkoutScreen from '../pages/Workout';
import FitScreen from '../pages/Fit';
import RestScreen from '../pages/Rest';

const TabsNavigator = () => {
  const Tab = createBottomTabNavigator();
  const { HOME, NEW_WORKOUT } = ROUTES;

  return (
    <Tab.Navigator
      initialRouteName={HOME}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === HOME) {
            iconName = 'home';
          } else if (rn === NEW_WORKOUT) {
            iconName = 'weight-lifter';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#f5bf42',
        inactiveTintColor: 'grey',
        labelStyle: {
          paddingBottom: 5,
          fontSize: 12,
        },
        style: {
          height: 200,
          backgroundColor: 'red',
        },
      }}
    >
      <Tab.Screen
        options={{ headerShown: false }}
        name={HOME}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name={NEW_WORKOUT}
        component={NewWorkoutScreen}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
