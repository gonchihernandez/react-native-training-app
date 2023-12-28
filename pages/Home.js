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

import MainLayout from '../navigator/TabsNavigator';
import FitnessCards from '../components/FitnessCards';

const HomeScreen = () => {
  const navigation = useNavigation();

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
            AndesFt [LOGO]
          </Text>

          {/* Logout Button */}
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <AntDesign name='logout' size={24} color='white' />
          </TouchableOpacity>
        </View>

        {/* Cards Info Row  */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}
        >
          {/* First Info Card  */}
          <View style={styles.shadowCards}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
              {calories.toFixed(2)}
            </Text>
            <Text>KCAL</Text>
          </View>

          {/* Second Info Card  */}
          <View style={styles.shadowCards}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{workout}</Text>
            <Text>WORKOUTS</Text>
          </View>

          {/* Third Info Card  */}
          <View style={styles.shadowCards}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{minutes}</Text>
            <Text>MINUTES</Text>
          </View>
        </View>
      </View>
      {/* Fitness Cards  */}
      <FitnessCards />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  shadowCards: {
    backgroundColor: '#ffffff',
    width: '32%',
    height: 80,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
