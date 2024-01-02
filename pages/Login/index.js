import { useRef } from 'react';
import { Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { ROUTES } from '../../utils/constants';

import styles from './styles';

import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
});

const Login = () => {
  const navigation = useNavigation();
  const { HOME } = ROUTES;

  const { viewContainer, viewContainerForm, viewInput, image } = styles;

  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      validationSchema: LoginSchema,
      initialValues: { email: '', password: '' },
      onSubmit: (values) => {
        alert(`Email: ${values.email}, Password: ${values.password}`),
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
