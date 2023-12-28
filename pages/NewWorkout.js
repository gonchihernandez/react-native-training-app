import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const NewWorkoutScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            fontSize: 30,
            fontWeight: 'bold',
            marginTop: 30,
          }}
        >
          New Workout Screen
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default NewWorkoutScreen;
