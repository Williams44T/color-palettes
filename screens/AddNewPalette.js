import React, { useState, useCallback } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  FlatList,
  Button,
  Switch,
  Alert,
} from 'react-native';
import COLORS from '../colors.js';

export default ({ navigation }) => {
  const [paletteName, setPaletteName] = useState('');
  const [colors, setColors] = useState([]);

  const handleUpdate = useCallback(
    (color, newColor) => {
      if (newColor) {
        setColors([...colors, color]);
      } else {
        setColors(colors.filter((c) => c.colorName !== color.colorName));
      }
    },
    [colors],
  );

  const handleSubmit = useCallback(() => {
    if (!paletteName) {
      return Alert.alert('Please enter a palette name');
    }
    if (colors.length < 3) {
      return Alert.alert('Please choose at least 3 colors');
    }
    var newPalette = { paletteName, colors };
    navigation.navigate('Home', { newPalette });
  }, [paletteName, colors, navigation]);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Name of your color scheme</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPaletteName}
          placeholder="Palette Name"
        />
      </View>
      <FlatList
        style={styles.colorList}
        data={COLORS}
        keyExtractor={(item, i) => String(i)}
        renderItem={({ item }) => {
          const backgroundColor = { backgroundColor: item.hexCode };
          return (
            <View style={styles.flexRow}>
              <Text style={styles.colorText}>{item.colorName}</Text>
              <View style={styles.flexRow}>
                <View style={[styles.colorPreview, backgroundColor]} />
                <Switch
                  value={
                    !!colors.find((color) => color.colorName === item.colorName)
                  }
                  onValueChange={(value) => handleUpdate(item, value)}
                />
              </View>
            </View>
          );
        }}
      />
      <Button style={styles.submit} title="Submit" onPress={handleSubmit} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
  text: {
    margin: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    borderRadius: 5,
  },
  colorList: {
    backgroundColor: 'white',
    padding: 5,
    marginBottom: 10,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  colorText: {
    fontWeight: 'bold',
  },
  colorPreview: {
    width: 40,
    height: 40,
    margin: 5,
    borderRadius: 3,
    elevation: 2,
  },
  submit: {
    marginTop: 10,
  },
});
