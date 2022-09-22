import React from 'react';
import { View } from 'react-native';

import Header from './src/component/Header';
import CarList from './src/component/CarList';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Header title={'Cars'} />
      <CarList />
    </View>
  );
}