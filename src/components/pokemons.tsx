import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
} from 'react-native';

export function Pokemon({pokemon}) {
  return (
    <View style={styles.cardContainer}>
      <Pressable
        style={styles.closeButton}
        onPress={() => {
          console.log('Close');
        }}>
        <Text style={styles.buttonText}>X</Text>
      </Pressable>
      <View style={styles.card}>
        <Text style={styles.text}>{pokemon.name}</Text>
        <Image source={{uri: pokemon.image}} style={styles.img} />
      </View>
      <Pressable
        style={styles.editButton}
        onPress={() => {
          console.log('Edit');
        }}>
        <Text style={styles.buttonText}>Edit</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#37796C',
    marginBottom: 10,
    width: Dimensions.get('window').width - 10,
    borderRadius: 20,
    alignSelf: 'center',
  },
  card: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  img: {
    width: 100,
    height: 100,
    aspectRatio: 1,
    borderRadius: 50,
    resizeMode: 'contain',
    backgroundColor: '#fff',
  },
  text: {
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 19,
    color: '#fff',
    marginRight: 10,
  },
  closeButton: {
    backgroundColor: 'red',
    height: 20,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: 'blue',
    height: 20,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
});
