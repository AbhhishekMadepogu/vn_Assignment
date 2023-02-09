import React from 'react';
import {Text, View, Image, StyleSheet, Dimensions} from 'react-native';

export function Pokemon({pokemon}) {
  return (
    <View style={styles.card}>
      <Image source={{uri: pokemon.image}} style={styles.img} />
      <Text style={styles.text}>{pokemon.name}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#37796C',
    height: 100,
    width: Dimensions.get('window').width - 10,
    marginBottom: 10,
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  img: {
    width: 100,
    height: 100,
    aspectRatio: 1,
    borderRadius: 50,
    resizeMode: 'contain',
  },
  text: {
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 19,
    color: '#fff',
    marginRight: 10,
  },
});
