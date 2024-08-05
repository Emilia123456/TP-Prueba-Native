import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Screen2({ route, navigation }) {
  const { nombre, numero } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Esta es la screen 2</Text>
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});
