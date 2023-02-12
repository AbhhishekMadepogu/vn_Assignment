import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
  TextInput,
  Alert,
} from 'react-native';
const width = Dimensions.get('window').width;
export function Pokemon({pokemon, deletePokemon, editPokemon}) {
  const [editable, setEditable] = useState(false);
  const [pokemonName, setPokemonName] = useState('');
  const handleEdit = () => {
    if (editable) {
      setEditable(false);
      const newPokemon = {
        id: pokemon.id,
        name: pokemonName,
        image: pokemon.image,
      };
      editPokemon(newPokemon);
    } else {
      setPokemonName(pokemon.name);
      setEditable(true);
    }
  };
  return (
    <View style={styles.cardContainer}>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.closeButton}
          onPress={() => {
            Alert.alert(
              'Delete Pokemon',
              `Are you sure you want to delete ${pokemon.name}`,
              [
                {
                  text: 'Yes',
                  onPress: () => {
                    deletePokemon(pokemon);
                  },
                },
                {
                  text: 'No',
                  onPress: () => {},
                  style: 'cancel',
                },
              ],
            );
          }}>
          <Text style={styles.buttonText}>X</Text>
        </Pressable>
        <Pressable
          style={styles.editButton}
          onPress={() => {
            handleEdit();
          }}>
          <Text style={styles.buttonText}>{editable ? 'Save' : 'Edit'}</Text>
        </Pressable>
      </View>
      <View style={styles.card}>
        {editable ? (
          <View>
            <TextInput
              autoFocus={true}
              style={styles.editText}
              value={pokemonName}
              maxLength={10}
              onChangeText={text => {
                setPokemonName(text);
              }}
            />
          </View>
        ) : (
          <Text style={styles.text}>{pokemon.name}</Text>
        )}

        <Image source={{uri: pokemon.image}} style={styles.img} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#37796C',
    marginBottom: 10,
    width: width - 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 60,
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
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editText: {
    backgroundColor: '#fff',
    color: '#000',
    fontSize: 19,
    fontWeight: 'bold',
    width: width / 3,
    marginRight: 10,
    alignSelf: 'center',
  },
});
