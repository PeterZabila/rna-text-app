import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, Alert, Button, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import Registration from './screens/Registration';
import Home from './screens/Home';

const MainStack = createStackNavigator();
export default function App() {

  return (
  
      <NavigationContainer>
        <View style={styles.container}>
          {/* <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={{width: 150, height: 150, borderRadius: 15, marginBottom: 12}}/> */}
          <Text style={styles.title}>RNA App</Text>
        
              <MainStack.Navigator initialRouteName="Login">
                <MainStack.Screen name="Registration" component={Registration}/>
                <MainStack.Screen name="Login" component={Login}/>
                <MainStack.Screen name="Home" component={Home}/>
              </MainStack.Navigator>
            </View>
        </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 15,
    color: "teal"
  },
  container: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  }
});
