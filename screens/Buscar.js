
"use client";
import React, { useState, useEffect } from 'react'; 
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import api from '../service/api.js';


export default function Buscar({ navigation }) {
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Esta es la screen 1</Text>
      </View>
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
  header: {
    padding: 16,
  },
  searchInput: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginTop: 8,
    color: '#1B2E35',
  },
});
