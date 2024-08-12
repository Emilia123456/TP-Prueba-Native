import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Buscar({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Esta es la screen 1</Text>
      <Button
        title="Ir a la screen 2"
        onPress={() => navigation.navigate('Screen2')}
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
