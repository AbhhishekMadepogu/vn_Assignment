import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
export function Pokemon({pokemon}) {
  return (
    <View style={styles.container}>
      <Image source={{uri: pokemon.image}} style={styles.img} />
      <Text style={styles.text}>{pokemon.name}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {flexDirection: 'row', justifyContent: 'space-between'},
  img: {width: 100, height: 100},
  text: {fontWeight: 'bold'},
});
