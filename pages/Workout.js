import { useContext } from 'react';
import { Image, ScrollView, TouchableOpacity, View, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { ROUTES } from '../utils/constants';

import { FitnessItems } from '../context/FitnessContext';

const WorkoutScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { FIT } = ROUTES;

  const { completed, setCompleted } = useContext(FitnessItems);

  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          backgroundColor: '#9E9FA5',
          padding: 12,
          marginHorizontal: 15,
          marginVertical: 20,
          borderRadius: 50,
          marginTop: 55,
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 20,
          }}
        >
          <Ionicons
            onPress={() => navigation.goBack()}
            style={{
              color: '#fff',
              padding: 12,
              marginHorizontal: 15,
              marginVertical: 20,
              borderRadius: 50,
            }}
            name='arrow-back-outline'
            size={24}
            color='black'
          />{' '}
          GO BACK
        </Text>
      </TouchableOpacity>
      <Image
        style={{
          width: '90%',
          height: 200,
          borderBottomLeftRadius: 20,
          borderRadius: 20,
          marginBottom: 20,
          marginLeft: 20,
        }}
        source={{ uri: route.params.image }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: 'white',
        }}
      >
        {route.params.exercises.map((item, index) => (
          <TouchableOpacity
            style={{
              marginVertical: 12,
              marginHorizontal: 18,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
            key={index}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Image
                style={{ width: 90, height: 90 }}
                source={{ uri: item.image }}
              />

              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                  {item.name}
                </Text>
                <Text style={{ marginTop: 4, fontSize: 16, color: 'gray' }}>
                  {item.sets}
                </Text>
              </View>
            </View>

            {completed.includes(item?.name) ? (
              <AntDesign name='checkcircle' size={24} color='#198f51' />
            ) : null}
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate(FIT, { exercises: route.params.exercises });
          setCompleted([]);
        }}
        style={{
          backgroundColor: '#198f51',
          padding: 12,
          marginHorizontal: 15,
          marginVertical: 20,
          borderRadius: 50,
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 20,
          }}
        >
          <MaterialCommunityIcons name='whistle' size={24} color='white' />{' '}
          START
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default WorkoutScreen;
