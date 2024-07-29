// screens/HomeScreen.js
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [nombre, handleNombreChange] = useState('');
  const [numero, handleNumeroChange] = useState('');

  const handlePress = () => {
    console.log('Button pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Formulario</Text>
        <Text style={styles.label}>Nombre</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese su nombre"
          onChangeText={handleNombreChange}
          value={nombre}
        />
        <Text style={styles.label}>Teléfono</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese su teléfono"
          onChangeText={handleNumeroChange}
          value={numero}
        />
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.label}>Olvidé la contra jaja re bobi</Text>
        </TouchableOpacity>
        <Button
          title="Siguiente"
          onPress={() => navigation.navigate('Data', { nombre, numero })}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginVertical: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
});
