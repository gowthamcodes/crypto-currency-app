import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { COLORS, FONTS, SIZES, icons } from '../constants';

const PriceAlert = ({ containerStyle }) => (
  <TouchableOpacity style={[styles.container, styles.shadow, containerStyle]}>
    <Image source={icons.notification_color} style={styles.image} />

    <View style={{ flex: 1, marginLeft: SIZES.radius }}>
      <Text style={{ ...FONTS.h3 }}>Get Price Alert</Text>
      <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>
        Get Notified when your coins are moving
      </Text>
    </View>

    <Image
      source={icons.right_arrow}
      style={{
        height: 25,
        width: 25,
        tintColor: COLORS.gray,
      }}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.padding * 4.5,
    marginHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding,
    paddingHorizontal: SIZES.radius,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  image: {
    width: 30,
    height: 30,
  },
});

export default PriceAlert;
