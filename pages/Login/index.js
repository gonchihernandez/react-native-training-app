import React, { useRef } from 'react';
import { Image, View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { API_URL } from '@env';

import { ROUTES, METHODS } from '../../utils/constants';

import styles from './styles';

import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

const { HOME } = ROUTES;
const { POST } = METHODS;

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
});

const Login = () => {
  const navigation = useNavigation();

  const { viewContainer, viewContainerForm, viewInput, image } = styles;

  const saveCookie = async (nickname) => {
    try {
      await AsyncStorage.setItem('@token', nickname);
    } catch (err) {
      console.log(err);
    }
  };

  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      validationSchema: LoginSchema,
      initialValues: { email: '', password: '' },
      onSubmit: async (values) => {
        try {
          const response = await fetch(`${API_URL}/api/signin`, {
            method: POST,
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: values.email,
              password: values.password,
            }),
          });

          const responseJson = await response.json();

          const cookies = response.headers.get('set-cookie');

          if (cookies) {
            saveCookie(cookies);
          }
        } catch (error) {
          console.error('Error:', error);
          Alert.alert('Cannot connect to Server!');
        }
        navigation.navigate(HOME);
      },
    });

  const password = useRef(null);

  return (
    <View style={viewContainer}>
      <Image source={require('../../assets/andesft.jpg')} style={image} />
      <View style={viewContainerForm}>
        <TextInput
          icon='mail'
          placeholder='Enter your email'
          autoCapitalize='none'
          autoCompleteType='email'
          keyboardType='email-address'
          keyboardAppearance='dark'
          returnKeyType='next'
          returnKeyLabel='next'
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          error={errors.email}
          touched={touched.email}
          onSubmitEditing={() => password.current?.focus()}
        />
      </View>
      <View style={viewInput}>
        <TextInput
          ref={password}
          icon='key'
          placeholder='Enter your password'
          secureTextEntry
          autoCompleteType='password'
          autoCapitalize='none'
          keyboardAppearance='dark'
          returnKeyType='go'
          returnKeyLabel='go'
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          error={errors.password}
          touched={touched.password}
          onSubmitEditing={() => handleSubmit()}
        />
      </View>
      <Button label='Login' onPress={handleSubmit} />
    </View>
  );
};

export default Login;
