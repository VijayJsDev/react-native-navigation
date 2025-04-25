import { View, Text, Button } from 'react-native';

export default function PaymentScreen({ navigation }) {
  return (
    <View>
      <Text>Payment Screen</Text>
      <Button title="Finish Payment" onPress={() => {
        navigation.reset({
          index: 0,
          routes: [
            {
              name: 'MainApp',
              state: {
                routes: [
                  {
                    name: 'AccountTab',
                    state: {
                      routes: [
                        { name: 'Your Orders', params: { fromPaymentScreen: true } },
                      ],
                    },
                  },
                ],
              },
            },
          ],
        });
      }} />
    </View>
  );
}
