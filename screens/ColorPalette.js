import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import Color from '../components/Color';

export default function ColorPalette({ route }) {
  return (
    <FlatList
      style={styles.container}
      data={route.params.palette.colors}
      keyExtractor={(item, i) => String(i)}
      renderItem={({ item }) => <Color color={item} />}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
  },
});
