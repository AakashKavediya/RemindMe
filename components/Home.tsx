import { StyleSheet, Text, View } from "react-native";
import React from "react";

//Importing packages
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

//Important Components
import Page1 from "./Page1";
import Page2 from "./Page2";

const Home = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Add+" component={Page1} />
      <Tab.Screen name="Reminder" component={Page2} />
    </Tab.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({});
