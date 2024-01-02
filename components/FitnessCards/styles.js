import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  touchOpacity: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  image: { width: '100%', height: 120, borderRadius: 12 },
  text: {
    position: 'absolute',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    left: 20,
    top: 20,
  },
  icon: { position: 'absolute', bottom: 15, left: 15 },
});

export default styles;
