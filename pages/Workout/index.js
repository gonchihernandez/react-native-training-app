import { useContext } from 'react';
import { Image, ScrollView, TouchableOpacity, View, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { ROUTES } from '../../utils/constants';

import styles from './styles';

import { FitnessItems } from '../../context/FitnessContext';

const WorkoutScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { FIT } = ROUTES;

  const {
    goBackTouchOpacity,
    goBackText,
    goBackIcon,
    image,
    routesScrollView,
    routeTouchOpacity,
    routeView,
    routeImage,
    itemView,
    itemName,
    itemSets,
    startTouchOpacity,
    startText,
  } = styles;

  const { completed, setCompleted } = useContext(FitnessItems);

  const handleStartOnPress = () => {
    navigation.navigate(FIT, { exercises: route.params.exercises });
    setCompleted([]);
  };

  const handleGoBackOnPress = () => {
    navigation.goBack();
  };

  return (
    <>
      <TouchableOpacity
        onPress={handleGoBackOnPress}
        style={goBackTouchOpacity}
      >
        <Text style={goBackText}>
          <Ionicons
            style={goBackIcon}
            name='arrow-back-outline'
            size={24}
            color='black'
          />{' '}
          GO BACK
        </Text>
      </TouchableOpacity>
      <Image style={image} source={{ uri: route.params.image }} />
      <ScrollView showsVerticalScrollIndicator={false} style={routesScrollView}>
        {route.params.exercises.map((item, index) => (
          <TouchableOpacity style={routeTouchOpacity} key={index}>
            <View style={routeView}>
              <Image style={routeImage} source={{ uri: item.image }} />

              <View style={itemView}>
                <Text style={itemName}>{item.name}</Text>
                <Text style={itemSets}>{item.sets}</Text>
              </View>
            </View>

            {completed.includes(item?.name) ? (
              <AntDesign name='checkcircle' size={24} color='#198f51' />
            ) : null}
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity onPress={handleStartOnPress} style={startTouchOpacity}>
        <Text style={startText}>
          <MaterialCommunityIcons name='whistle' size={24} color='white' />{' '}
          START
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default WorkoutScreen;
