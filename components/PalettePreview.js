import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  FlatList,
} from 'react-native';

export default function PallettePreview({ navigation, palette }) {
  const renderItem = ({ item }) => {
    const backgroundColor = { backgroundColor: item.hexCode };
    return <View style={[styles.color, backgroundColor]} />;
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.push('ColorPalette', { palette });
      }}
    >
      <Text style={styles.title}>{palette.paletteName}</Text>
      <FlatList
        contentContainerStyle={styles.preview}
        data={palette.colors.slice(0, 5)}
        keyExtractor={(item, i) => String(i)}
        renderItem={renderItem}
        horizontal={true}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  title: {
    fontWeight: 'bold',
    margin: 5,
  },
  preview: {
    height: 50,
    marginBottom: 10,
  },
  color: {
    width: 40,
    height: 40,
    margin: 5,
    borderRadius: 3,
    elevation: 2,
  },
});
