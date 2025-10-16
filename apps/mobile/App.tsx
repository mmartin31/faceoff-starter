import React from 'react';
import { StatusBar, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>FaceOff - Home</Text>
    </View>
  );
}

function ChallengesScreen() {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Challenges Feed</Text>
    </View>
  );
}

function LeaguesScreen() {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Leagues</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Profile & Stats</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Challenges" component={ChallengesScreen} />
        <Tab.Screen name="Leagues" component={LeaguesScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}