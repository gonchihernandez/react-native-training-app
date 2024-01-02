import { useEffect, useState } from 'react';
import { Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons as Icon } from '@expo/vector-icons';

import styles from './styles';

const RestScreen = () => {
  const navigation = useNavigation();

  const { safeAreaView, image, breakText, timeLeftText } = styles;

  let timer = 0;
  const [timeLeft, setTimeLeft] = useState(3);

  const startTime = () => {
    setTimeout(() => {
      if (timeLeft <= 0) {
        navigation.goBack();
        clearTimeout(timer);
      }
      setTimeLeft(timeLeft - 1);
    }, 1000);
  };

  useEffect(() => {
    startTime();
    //Cleanup Function
    return () => clearTimeout(timer);
  });

  return (
    <SafeAreaView style={safeAreaView}>
      <Image
        source={{
          uri: 'https://img.freepik.com/free-photo/full-length-athlete-sipping-water-from-fitness-bottle-exhausted-after-workout_1098-18878.jpg?w=360&t=st=1689099570~exp=1689100170~hmac=a60d176d8a393f59b8b032dd294005ceedbd048a04c01e542bcffa815ecd4428',
        }}
        style={image}
      />
      <Text style={breakText}>TAKE A BREAK!</Text>

      <Text style={timeLeftText}>
        <Icon name='timer' size={26} color='black' /> {timeLeft}
      </Text>
    </SafeAreaView>
  );
};

export default RestScreen;
