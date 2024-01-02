import { useState, useContext } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

import { ROUTES } from '../../utils/constants';

import styles from './styles';

import { FitnessItems } from '../../context/FitnessContext';

const FitScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { HOME, NEW_WORKOUT, LOGIN, WORKOUT, FIT, REST } = ROUTES;
  const {
    safeAreaView,
    image,
    currentName,
    currentSets,
    touchableOpacityDoneButton,
    doneButton,
    previousButtonView,
    touchableOpacityButton,
    prevButton,
    skipButton,
  } = styles;

  const [index, setIndex] = useState(0);
  const exercise = route.params.exercises;
  const current = exercise[index];
  const {
    completed,
    setCompleted,
    calories,
    setCalories,
    minutes,
    setMinutes,
    workout,
    setWorkout,
  } = useContext(FitnessItems);

  return (
    <SafeAreaView style={safeAreaView}>
      <Image style={image} source={{ uri: current?.image }} />

      <Text style={currentName}>{current?.name}</Text>

      <Text style={currentSets}>x{current?.sets}</Text>

      {/* Done Button  */}
      {index + 1 >= exercise.length ? (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(HOME);
            setCompleted([...completed, current?.name]);
            setWorkout(workout + 1);
            setMinutes(minutes + 2.5);
            setCalories(calories + 6.3);
            setTimeout(() => {
              setIndex(index + 1);
            }, 2000);
          }}
          style={touchableOpacityDoneButton}
        >
          <Text style={doneButton}>
            <Ionicons name='checkmark-circle' size={24} color='white' /> DONE
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(REST);
            setCompleted([...completed, current?.name]);
            setWorkout(workout + 1);
            setMinutes(minutes + 2.5);
            setCalories(calories + 6.3);
            setTimeout(() => {
              setIndex(index + 1);
            }, 2000);
          }}
          style={touchableOpacityDoneButton}
        >
          <Text style={doneButton}>
            <Ionicons name='checkmark-circle' size={24} color='white' /> DONE
          </Text>
        </TouchableOpacity>
      )}

      {/* Previous Button  */}
      <View style={previousButtonView}>
        <TouchableOpacity
          disabled={index === 0}
          onPress={() => {
            navigation.navigate(REST);
            setTimeout(() => {
              setIndex(index - 1);
            }, 2000);
          }}
          style={touchableOpacityButton}
        >
          <Text style={prevButton}>
            <Ionicons name='play-skip-back' size={22} color='#6d6868' /> PREV
          </Text>
        </TouchableOpacity>

        {/* Skip Button  */}
        {index + 1 >= exercise.length ? (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(HOME);
            }}
            style={touchableOpacityButton}
          >
            <Text style={skipButton}>
              <Ionicons name='play-skip-forward' size={22} color='#3f3d3d' />{' '}
              SKIP
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(REST);

              setTimeout(() => {
                setIndex(index + 1);
              }, 2000);
            }}
            style={touchableOpacityButton}
          >
            <Text style={skipButton}>
              <Ionicons name='play-skip-forward' size={22} color='#3f3d3d' />{' '}
              SKIP
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default FitScreen;
