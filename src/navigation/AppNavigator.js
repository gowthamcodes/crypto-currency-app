import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { COLORS, FONTS, icons } from '../constants';
import { Home } from '../screens';
import routes from './routes';
import LinearGradient from 'react-native-linear-gradient';

const Tab = createBottomTabNavigator();

const NavIcon = ({ icon, iconStyle, label, labelStyle }) => (
  <View
    style={{
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <Image
      source={icon}
      resizeMode={'contain'}
      style={[{ width: 30, height: 30 }, iconStyle]}
    />
    <Text style={[{ ...FONTS.body5 }, labelStyle]}>{label}</Text>
  </View>
);

const MaterialButton = ({ children, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow,
    }}>
    <LinearGradient
      colors={[COLORS.primary, COLORS.secondary]}
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
      }}>
      {children}
    </LinearGradient>
  </TouchableOpacity>
);

const AppNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          elevation: 0,
          height: 70,
          borderTopColor: 'transparent',
          backgroundColor: COLORS.white,
        },
      }}>
      <Tab.Screen
        name={routes.HOME}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <NavIcon
              icon={icons.home}
              iconStyle={{ tintColor: focused ? COLORS.primary : COLORS.black }}
              label={'Home'}
              labelStyle={{
                color: focused ? COLORS.primary : COLORS.black,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={routes.PORTFOLIO}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <NavIcon
              icon={icons.pie_chart}
              iconStyle={{ tintColor: focused ? COLORS.primary : COLORS.black }}
              label={'Portfolio'}
              labelStyle={{
                color: focused ? COLORS.primary : COLORS.black,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={routes.TRANSACTION}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.transaction}
              resizeMode={'contain'}
              style={{
                height: 30,
                width: 30,
                tintColor: COLORS.white,
              }}
            />
          ),
          tabBarButton: props => <MaterialButton {...props} />,
        }}
      />
      <Tab.Screen
        name={routes.PRICES}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <NavIcon
              icon={icons.line_graph}
              iconStyle={{ tintColor: focused ? COLORS.primary : COLORS.black }}
              label={'Prices'}
              labelStyle={{
                color: focused ? COLORS.primary : COLORS.black,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={routes.SETTINGS}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <NavIcon
              icon={icons.settings}
              iconStyle={{ tintColor: focused ? COLORS.primary : COLORS.black }}
              label={'Settings'}
              labelStyle={{
                color: focused ? COLORS.primary : COLORS.black,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default AppNavigator;
