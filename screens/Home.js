import React, { useState, useCallback, useEffect } from 'react';
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import PalettePreview from '../components/PalettePreview.js';
const URL = 'https://color-palette-api.kadikraman.now.sh/palettes';

export default function Home({ navigation, route }) {
  var [palettes, setPalettes] = useState([]);
  var [refreshing, setRefreshing] = useState(false);
  var newPalette = route.params ? route.params.newPalette : null;

  const refresh = useCallback(async (cb) => {
    setRefreshing(true);
    await cb();
    setTimeout(() => setRefreshing(false), 1000);
  }, []);

  useEffect(() => {
    if (newPalette) {
      setPalettes((current) => [newPalette, ...current]);
    }
  }, [newPalette]);

  const fetchPalettes = useCallback(async () => {
    const result = await fetch(URL);
    if (result.ok) {
      setPalettes(await result.json());
    }
  }, []);

  useEffect(() => {
    fetchPalettes();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.push('Add New Color Scheme')}
      >
        <Text style={styles.buttonText}>Add New Color Scheme</Text>
      </TouchableOpacity>
      <FlatList
        data={palettes}
        keyExtractor={(item, i) => String(i)}
        renderItem={({ item }) => {
          return <PalettePreview navigation={navigation} palette={item} />;
        }}
        refreshing={refreshing}
        onRefresh={() => {
          refresh(fetchPalettes);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: 'grey',
    padding: 10,
    elevation: 5,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
