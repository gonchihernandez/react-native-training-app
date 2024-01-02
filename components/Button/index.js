import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

const Button = ({ label, onPress }) => {
  const { touchOpacity, text } = styles;

  return (
    <TouchableOpacity
      style={touchOpacity}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text style={text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
