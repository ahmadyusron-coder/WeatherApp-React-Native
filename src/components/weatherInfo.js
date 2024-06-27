import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const WeatherInfo = ({ weatherData }) => {
  const { name, weather, main, visibility, wind } = weatherData;
  const iconUrl = `https://openweathermap.org/img/w/${weather[0].icon}.png`;

  return (
    <View style={styles.container}>
      <Text style={styles.location}>{name}</Text>
      <Text style={styles.temperature}>{main.temp}°C</Text>
      <View style={styles.row}>
        <Image source={{ uri: iconUrl }} style={styles.icon} />
        <Text style={styles.main}>{weather[0].main}</Text>
      </View>
      <Text style={styles.description}>{weather[0].description}</Text>
      <Text style={styles.detail}>Visibility: {visibility} km</Text>
      <Text style={styles.detail}>Wind Speed: {wind.speed} m/s</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  location: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  temperature: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#ff8c00',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  icon: {
    width: 50,
    height: 50,
  },
  main: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    textTransform: 'capitalize',
  },
  detail: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default WeatherInfo;