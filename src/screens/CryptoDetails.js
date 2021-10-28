import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import routes from '../navigation/routes';

const CryptoDetails = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Crypto Details</Text>
      <TouchableOpacity onPress={() => navigation.navigate(routes.TRANSACTION)}>
        <Text>Navigate to Transaction</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
});

export default CryptoDetails;
