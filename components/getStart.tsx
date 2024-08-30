import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import React from "react";

//Importing packages
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Import Components
import Home from "./Home";

const getStart = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <TextInput
          placeholder="Enter Name"
          placeholderTextColor={"gray"}
          style={styles.textInput}
        />
        <TouchableOpacity onPress={() => props.navigation.navigate(Home)}>
          <Text style={styles.textButton}>Let's go!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default getStart;

const styles = StyleSheet.create({
  textInput: {
    width: 300,
    padding: 10,
    backgroundColor: "white",
    elevation: 20,
    borderRadius: 15,
    fontSize: 20,
    margin: 20
  },
  textButton: {
    width: 300,
    padding: 10,
    backgroundColor: "gray",
    // elevation: 20,
    borderRadius: 15,
    fontSize: 20,
    textAlign: "center",
    color: "white"
  }
});
