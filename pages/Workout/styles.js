import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  goBackTouchOpacity: {
    backgroundColor: '#9E9FA5',
    padding: 12,
    marginHorizontal: 15,
    marginVertical: 20,
    borderRadius: 50,
    marginTop: 55,
  },
  goBackText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  goBackIcon: {
    color: '#fff',
    padding: 12,
    marginHorizontal: 15,
    marginVertical: 20,
    borderRadius: 50,
  },
  image: {
    width: '90%',
    height: 200,
    borderBottomLeftRadius: 20,
    borderRadius: 20,
    marginBottom: 20,
    marginLeft: 20,
  },
  routesScrollView: {
    backgroundColor: 'white',
  },
  routeTouchOpacity: {
    marginVertical: 12,
    marginHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  routeView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  routeImage: { width: 90, height: 90 },
  itemView: { marginLeft: 10 },
  itemName: { fontSize: 18, fontWeight: 'bold' },
  itemSets: { marginTop: 4, fontSize: 16, color: 'gray' },
  startTouchOpacity: {
    backgroundColor: '#198f51',
    padding: 12,
    marginHorizontal: 15,
    marginVertical: 20,
    borderRadius: 50,
  },
  startText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default styles;
