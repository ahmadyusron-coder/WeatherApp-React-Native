import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY } from './src/constans';
import { View, StyleSheet, Text } from 'react-native';
import WeatherSearch from './src/components/weatherSearch';
import WeatherInfo from './src/components/weatherInfo';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const searchWeather = (location) => {
    setError('');
    axios
      .get(`${BASE_URL}?q=${location}&appid=${API_KEY}`)
      .then((response) => {
        const data = response.data;
        data.visibility /= 1000;
        data.visibility = data.visibility.toFixed(2);
        data.main.temp -= 273.15;
        data.main.temp = data.main.temp.toFixed(2);
        setWeatherData(data);
      })
      .catch((error) => {
        setError('Location not found or network error.');
      });
  };

  return (
    <View style={styles.container}>
      <WeatherSearch searchWeather={searchWeather} />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      {weatherData && <WeatherInfo weatherData={weatherData} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default App;