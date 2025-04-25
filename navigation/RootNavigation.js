import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabs from './MainTabs';
import PaymentScreen from '../screens/PaymentScreen';

const RootStack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="MainApp" component={MainTabs} />
      <RootStack.Screen name="Payment" component={PaymentScreen} />
    </RootStack.Navigator>
  );
}
