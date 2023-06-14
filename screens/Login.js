import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';

const Login = ({ navigation }) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const nameHandler = (text) => setName(text);
    const passwordHandler = (text) => setPassword(text);
    const onLogin = () => {
      Alert.alert("Credentials", `${name} + ${password}`);
      navigation.navigate("Home", {
        screen: 'Posts'
      });
    }
  
    
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={StyleSheet.container}>
            <Text>Login screen</Text>

            <KeyboardAvoidingView behaviour={Platform.OS == "ios" ? "padding" : "height"}>
              <TextInput
                  placeholder='Your name'
                  value={name}
                  onChangeText={nameHandler}
                  style={styles.input}
              />
            </KeyboardAvoidingView>
            
              <KeyboardAvoidingView behaviour={Platform.OS == "ios" ? "padding" : "height"}>
                <TextInput
                  placeholder='Password'
                  value={password}
                  onChangeText={passwordHandler}
                  secureTextEntry={true}
                  style={styles.input}
                />
              </KeyboardAvoidingView>
              <Button title={"Login"} style={styles.input} onPress={onLogin}/>
              <Button 
                title="Register"
                onPress={() => navigation.navigate("Registration")}
              />
        
        </View>
      </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "lightgray",
    marginBottom: 15,
    borderRadius: 5,
  },
})
   
export default Login;