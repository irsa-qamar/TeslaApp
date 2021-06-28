import React from 'react';
import { View, SafeAreaView, StyleSheet, StatusBar} from 'react-native';

import CarItem from './components/CarItem';
import CarList from './components/CarList';
import Header from './components/Header';
const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      
      <CarList/>
      <Header/>
      <StatusBar style='auto'/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
