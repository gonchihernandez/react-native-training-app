import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeAreaView: { marginTop: 0 },
  headerView: {
    backgroundColor: '#9E9FA5',
    paddingTop: 55,
    paddingHorizontal: 20,
    height: 160,
    width: '100%',
  },
  businessText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    paddingTop: 10,
  },
  rowInfoCards: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
});

export default styles;
