import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Color(props) {
  const backgroundColor = { backgroundColor: props.color.hexCode };
  const textColor = {
    color:
      parseInt(props.color.hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };

  return (
    <View style={[styles.view, backgroundColor]}>
      <Text style={[styles.text, textColor]}>
        {props.color.colorName} {props.color.hexCode}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius: 3,
    padding: 10,
    elevation: 2,
  },
  text: {
    fontWeight: 'bold',
  },
});
