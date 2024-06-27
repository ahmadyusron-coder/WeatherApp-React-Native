import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import CustomTextInput from './customTextInput';

const WeatherSearch = ({ searchWeather }) => {
  const [location, setLocation] = useState('');

  return (
    <View style={styles.container}>
      <CustomTextInput
        placeholder="Search the weather of your city"
        numberOfLines={1}
        text={location}
        onChange={setLocation}
      />
      <View style={styles.buttonWrapper}>
        <Button
          title="Search"
          onPress={() => searchWeather(location)}
          color="#ff8c00"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  buttonWrapper: {
    marginTop: 20,
    backgroundColor: '#ff8c00',
    borderRadius: 5,
    overflow: 'hidden',
  },
});

export default WeatherSearch;