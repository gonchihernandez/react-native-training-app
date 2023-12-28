import { StatusBar } from 'expo-status-bar';

import { FitnessContext } from './context/FitnessContext';
import StackNavigator from './navigator/StackNavigator';

const App = () => (
  <FitnessContext>
    <StatusBar style='light' backgroundColor='#9E9FA5' />
    <StackNavigator />
  </FitnessContext>
);

export default App;
