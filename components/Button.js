import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ label, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#f5bf42',
        padding: 12,
        marginHorizontal: 15,
        marginVertical: 20,
        width: 245,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
      }}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text
        style={{
          textAlign: 'center',
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 20,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
