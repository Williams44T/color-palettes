import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import AddNewPalette from './screens/AddNewPalette';
const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
      {/* <RootStack.Navigator mode="modal"> */}
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        {/* <RootStack.Screen
          name="Add New Color Scheme"
          component={AddNewPalette}
        /> */}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen
        name="ColorPalette"
        component={ColorPalette}
        options={({ route }) => ({ title: route.params.palette.paletteName })}
      />
      <MainStack.Screen name="Add New Color Scheme" component={AddNewPalette} />
    </MainStack.Navigator>
  );
};
