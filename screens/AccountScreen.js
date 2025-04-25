import { View, Text, Button } from 'react-native';

export default function AccountScreen({ navigation }) {
  return (
    <View>
      <Text>Account Screen</Text>
      <Button title="Your Orders" onPress={() => navigation.navigate('Your Orders')} />
    </View>
  );
}
