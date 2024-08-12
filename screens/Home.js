import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, View, StyleSheet, Image, TouchableOpacity, Button, TextInput, Alert } from 'react-native';
import { searchMovies } from '../service/api.js';  // Importa la función searchMovies desde api.js

const EventoItem = ({ evento, onPress }) => (
  <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
    <Image source={{ uri: evento.Poster }} style={styles.imagen} />
    <View style={styles.textContainer}>
      <Text style={styles.name}>{evento.Title}</Text>
      <Text style={styles.description}>{evento.Type}</Text>
      <Text style={styles.start_date}>{evento.Year}</Text>
    </View>
  </TouchableOpacity>
);

const Home = ({ navigation }) => {
  const [search, setSearch] = useState(''); 
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const response = await searchMovies(search);
      if (response.Search) {
        setMovies(response.Search);  
      } else {
        Alert.alert('No se encontraron resultados');
        setMovies([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      Alert.alert('Error al buscar películas');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        value={search}
        placeholder="Buscar"
        onChangeText={text => setSearch(text)}
        style={styles.input}
      />
      <Button title="Buscar" onPress={fetchMovies} />
      <FlatList 
          data={movies}
          renderItem={({ item }) => (
            <EventoItem
              evento={item}
              onPress={() => navigation.navigate('Detail', { evento: item })}
            />
          )}
          keyExtractor={item => (item.imdbID ? item.imdbID.toString() : Math.random().toString())}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  flatListContent: {
    width: '100%',
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  imagen: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  start_date: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default Home;
