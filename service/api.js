import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.omdbapi.com/',  // Corrección de la URL base
  headers: {
    'Content-Type': 'application/json',
  },
});

export const searchMovies = async (inputValue) => {
  try {
    const response = await api.get('/', {
      params: {
        apikey: '6e153896',  //mi api key :)
        s: inputValue,      
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
