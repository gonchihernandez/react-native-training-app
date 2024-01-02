import { useContext } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign as Icon } from '@expo/vector-icons';

import { ROUTES } from '../../utils/constants';

import styles from './styles';

import { FitnessItems } from '../../context/FitnessContext';

import MainLayout from '../../navigator/TabsNavigator';
import FitnessCards from '../../components/FitnessCards';
import Card from '../../components/Card';

const HomeScreen = () => {
  const navigation = useNavigation();
  const { LOGIN } = ROUTES;

  const {
    safeAreaView,
    headerView,
    headerContainer,
    businessText,
    rowInfoCards,
  } = styles;

  const { calories, minutes, workout } = useContext(FitnessItems);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={safeAreaView}>
      <View style={headerView}>
        <View style={headerContainer}>
          <Text style={businessText}>AndesFt</Text>
          <TouchableOpacity onPress={() => navigation.navigate(LOGIN)}>
            <Icon name='logout' size={24} color='white' />
          </TouchableOpacity>
        </View>
        <View style={rowInfoCards}>
          <Card value={calories.toFixed(2)} title='KCAL' />
          <Card value={workout} title='WORKOUTS' />
          <Card value={minutes} title='MINUTES' />
        </View>
      </View>
      <FitnessCards />
    </ScrollView>
  );
};

export default HomeScreen;
