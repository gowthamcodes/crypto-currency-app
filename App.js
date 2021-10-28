import React, { useEffect } from 'react';
import { StatusBar, View } from 'react-native';

import { CryptoDetails, Transaction } from './src/screens';
import AppNavigator from './src/navigation/AppNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import routes from './src/navigation/routes';
import SplashScreen from 'react-native-splash-screen';
import { COLORS } from './src/constants';

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <StatusBar
        backgroundColor={COLORS.secondary}
        barStyle={'light-content'}
      />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={routes.HOME}>
          <Stack.Screen name={routes.HOME} component={AppNavigator} />
          <Stack.Screen
            name={routes.CRYPTO_DETAILS}
            component={CryptoDetails}
          />
          <Stack.Screen name={routes.TRANSACTION} component={Transaction} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
