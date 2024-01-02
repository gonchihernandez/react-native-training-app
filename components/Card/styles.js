import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  viewShadow: {
    backgroundColor: '#ffffff',
    width: '32%',
    height: 80,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: { fontWeight: 'bold', fontSize: 18 },
});

export default styles;
