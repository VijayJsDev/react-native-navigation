import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomePage({navigation}) {
  const navigate =useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is the HomePage screen</Text>
      <Button onPress={()=> navigation.navigate('ProductDetails')} title='Go To Product Details'/>
    </View>
  );
}
