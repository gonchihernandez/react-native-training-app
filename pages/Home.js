import { useContext, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import { FitnessItems } from '../context/FitnessContext';

import { ROUTES } from '../utils/constants';

import MainLayout from '../navigator/TabsNavigator';
import FitnessCards from '../components/FitnessCards';
import Card from '../components/Card';

const HomeScreen = () => {
  const navigation = useNavigation();
  const { LOGIN } = ROUTES;

  const { calories, minutes, workout } = useContext(FitnessItems);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 0 }}>
      <View
        style={{
          backgroundColor: '#9E9FA5',
          paddingTop: 55,
          paddingHorizontal: 20,
          height: 160,
          width: '100%',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 40,
          }}
        >
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 18,
              paddingTop: 10,
            }}
          >
            AndesFt
          </Text>

          {/* Logout Button */}
          <TouchableOpacity onPress={() => navigation.navigate(LOGIN)}>
            <AntDesign name='logout' size={24} color='white' />
          </TouchableOpacity>
        </View>

        {/* Cards Info Row  */}
        <View style={styles.rowInfoCards}>
          <Card value={calories.toFixed(2)} title='KCAL' />
          <Card value={workout} title='WORKOUTS' />
          <Card value={minutes} title='MINUTES' />
        </View>
      </View>
      {/* Fitness Cards  */}
      <FitnessCards />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  rowInfoCards: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
