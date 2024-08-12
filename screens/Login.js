import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();
  const [nombre, setNombre] = useState('');
  const [numero, setNumero] = useState('');

  const handleForgotPasswordPress = () => {
    Linking.openURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
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
          onChangeText={setNombre}
          value={nombre}
        />
        <Text style={styles.label}>Teléfono</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese su teléfono"
          onChangeText={setNumero}
          value={numero}
          keyboardType='phone-pad'
        />
        <TouchableOpacity onPress={handleForgotPasswordPress}>
          <Text style={styles.forgotPassword}>Olvidé la contraseña</Text>
        </TouchableOpacity>
        <Button
          title="Siguiente"
          onPress={() => navigation.navigate('Tabs', { screen: 'Home', params: { nombre, numero } })}
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
  forgotPassword: {
    fontSize: 16,
    color: 'blue',
    marginBottom: 16,
    textAlign: 'center',
  },
});
