import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from '@react-navigation/stack';

import { Posts } from './Posts'

const HomeStack = createStackNavigator();

function Settings() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
      </View>
    );
  }
  
  function Profile() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Profile!</Text>
      </View>
    );
  }
  
  const Tabs = createBottomTabNavigator();

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Hello dflsdgdfgdfb</Text>
      <HomeStack.Navigator initialRouteName='Posts'>
          <HomeStack.Screen name="Posts" component={Posts}/>
      </HomeStack.Navigator>

        <Tabs.Navigator
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Profile") {
                iconName = focused
                    ? "ios-information-circle"
                    : "ios-information-circle-outline";
                } else if (route.name === "Settings") {
                iconName = focused ? "ios-list-box" : "ios-list";
                }
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            })}
            tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
            }}
        >
            <Tabs.Screen name="Settings" component={Settings} />
            <Tabs.Screen name="Profile" component={Profile} />
        </Tabs.Navigator>
    </View>
);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default Home
