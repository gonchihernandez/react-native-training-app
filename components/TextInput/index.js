import { forwardRef } from 'react';
import { TextInput as RNTextInput, View, StyleSheet } from 'react-native';
import { Entypo as Icon } from '@expo/vector-icons';

import styles from './styles';

const TextInput = forwardRef(({ icon, error, touched, ...otherProps }, ref) => {
  const validationColor = !touched ? '#223e4b' : error ? '#FF5A5F' : '#223e4b';
  const { viewIcon, viewFlex } = styles;

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: 48,
        borderRadius: 8,
        borderColor: validationColor,
        borderWidth: StyleSheet.hairlineWidth,
        padding: 8,
      }}
    >
      <View style={viewIcon}>
        <Icon name={icon} color={validationColor} size={16} />
      </View>
      <View style={viewFlex}>
        <RNTextInput
          underlineColorAndroid='transparent'
          placeholderTextColor='rgba(34, 62, 75, 0.7)'
          ref={ref}
          {...otherProps}
        />
      </View>
    </View>
  );
});

export default TextInput;
