import { Image, Text, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import fitness from '../../data/fitness';

import styles from './styles';

const FitnessCards = () => {
  const { touchOpacity, icon, text, image } = styles;

  const FitnessData = fitness;
  const navigation = useNavigation();

  const handleOnPress = (item) => () => {
    navigation.navigate('Workout', {
      image: item.image,
      exercises: item.exercises,
      id: item.id,
    });
  };

  return (
    <View style={{ marginTop: 50, marginHorizontal: 20, marginBottom: 20 }}>
      {FitnessData.map((item, id) => (
        <TouchableOpacity
          onPress={handleOnPress(item)}
          style={touchOpacity}
          key={id}
        >
          <Image style={image} source={{ uri: item.image }} />
          <Text style={text}>{item.name}</Text>
          <Icon name='lightning-bolt' size={30} color='#dfbe04' style={icon} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default FitnessCards;
