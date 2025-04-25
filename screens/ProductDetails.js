import { View, Text, Button } from 'react-native';

export default function ProductDetails({ navigation }) {
  return (
    <View>
      <Text>Your ProductDetails Screen</Text>
      <Button title="Go to Payment" onPress={() => navigation.navigate('Payment')} />
    </View>
  );
}
