import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import React, { useState, useEffect } from "react";

const Page1 = () => {
  //Use of Usestate for posting data
  const [heading, setHeading] = useState("");
  const [subject, setSubject] = useState("");
  const [discription, setDiscription] = useState("");

  const getData = async () => {
    const URL = "http://192.168.0.104:3000/users";
    let result = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ heading, subject, discription })
    });
    result = await result.json();
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View>
      <Text style={styles.header}>Hey Akki!</Text>
      <TextInput
        placeholder="Enter heading"
        placeholderTextColor={"gray"}
        style={styles.textInput}
        onChangeText={(text) => setHeading(text)}
      />
      <TextInput
        placeholder="Enter subject"
        placeholderTextColor={"gray"}
        style={styles.textInput}
        onChangeText={(text) => setSubject(text)}
      />
      <TextInput
        placeholder="Enter discription"
        placeholderTextColor={"gray"}
        style={styles.textInput}
        onChangeText={(text) => setDiscription(text)}
      />
      <TouchableOpacity onPress={getData}>
        <Text style={styles.textButton}>Remind me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Page1;

const styles = StyleSheet.create({
  header: {
    fontSize: 35,
    color: "#1c1c1c",
    fontWeight: "bold",
    padding: 20,
    elevation: 20
  },
  textInput: {
    width: 300,
    borderRadius: 10,
    padding: 10,
    fontSize: 20,
    color: "black",
    backgroundColor: "white",
    elevation: 20,
    margin: 10,
    marginLeft: "auto",
    marginRight: "auto"
  },
  textButton: {
    width: 300,
    padding: 10,
    fontSize: 20,
    color: "white",
    backgroundColor: "gray",
    borderRadius: 10,
    margin: 10,
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto"
  }
});
