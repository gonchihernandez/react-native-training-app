import { Text, View } from 'react-native';

import styles from './styles';

const Card = ({ value, title }) => {
  const { viewShadow, text } = styles;

  return (
    <View style={viewShadow}>
      <Text style={text}>{value}</Text>
      <Text>{title}</Text>
    </View>
  );
};

export default Card;
