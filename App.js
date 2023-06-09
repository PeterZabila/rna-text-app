import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, Alert, Button, Image} from 'react-native';
// import * as Font from 'expo-font';
// import { AppLoading } from 'expo';

// const loadFonts = async () => {
//   await Font.loadAsync({
//     "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
//     "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
//   });
// };

export default function App() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  // const [isReady, setIsReady] = useState(false)
  //   if (!isReady) {
  //       return <AppLoading startAsync={loadFonts} onFinish={() => setIsReady(true)}/>
  //   }
  
  const nameHandler = (text) => setName(text);
  const passwordHandler = (text) => setPassword(text);
  const onLogin = () => {
    Alert.alert("Credentials", `${name} + ${password}`)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={{width: 150, height: 150, borderRadius: 15, marginBottom: 12}}/>
        <Text style={styles.title}>RNA App</Text>
          <KeyboardAvoidingView behaviour={Platform.OS == "ios" ? "padding" : "height"}>
            <TextInput
              placeholder='Your name'
              value={name}
              onChangeText={nameHandler}
              style={styles.input}
            />
            <TextInput
              placeholder='Password'
              value={password}
              onChangeText={passwordHandler}
              secureTextEntry={true}
              style={styles.input}
            />
            <Button title={"Login"} style={styles.input} onPress={onLogin}/>
          </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
    
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 15,
    color: "teal"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
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
  // title: {
  //   marginTop: 16,
  //   paddingVertical: 8,
  //   borderWidth: 4,
  //   borderColor: "#20232a",
  //   borderRadius: 6,
  //   backgroundColor: "#61dafb",
  //   color: "#20232a",
  //   textAlign: "center",
  //   fontSize: 30,
  //   fontWeight: "bold"
  // }
});
