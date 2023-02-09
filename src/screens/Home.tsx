import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {PokemonsContainer} from '../containers/PokemonsContainer';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <PokemonsContainer />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1},
});
