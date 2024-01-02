import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  skipButton: {
    color: '#3f3d3d',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  prevButton: {
    color: '#6d6868',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  touchableOpacityButton: { borderRadius: 30, padding: 10, width: '42%' },
  previousButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: 25,
  },
  doneButton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  touchableOpacityDoneButton: {
    backgroundColor: '#198f51',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 50,
    borderRadius: 30,
    padding: 10,
    width: '90%',
  },
  image: { width: '90%', height: 400, borderRadius: 20 },
  safeAreaView: { display: 'flex', alignItems: 'center' },
  currentName: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30,
  },
  currentSets: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 45,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default styles;
