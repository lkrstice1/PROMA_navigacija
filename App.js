import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PocetniEkran from './screens/PocetniEkran';
import DetaljEkran from './screens/DetaljEkran';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Naslovna' 
          component={PocetniEkran} 
          options={{
            title: 'Moja naslovnica',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name='Detalji' 
          component={DetaljEkran}
          initialParams={{ broj: 42, poruka: "Nema poruke" }}
          options={({ navigation, route }) => {
            return{ title: route.params.ime}
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


