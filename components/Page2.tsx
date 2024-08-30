import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity
} from "react-native";
import React, { useState, useEffect } from "react";

const Page2 = () => {
  const [data, setData] = useState([]);
  //   const [deleteData, setDeleteData] = useState(undefined);
  const getData = async () => {
    const URL = "http://192.168.0.104:3000/users";
    let result = await fetch(URL);
    result = await result.json();
    setData(result);
  };

  const deleteData = async (id) => {
    const URL = "http://192.168.0.104:3000/users";
    let result = await fetch(`${URL}/${id}`, {
      method: "Delete"
    });
    result = await result.json();
  };

  useEffect(() => {
    getData();
  });

  return (
    <View>
      <ScrollView>
        {data.length ? (
          data.map((info) => (
            <View style={styles.mainBox}>
              <View style={styles.subMainBox}>
                <View style={styles.boxHead}>
                  <Text style={styles.heading}>{info.heading}</Text>
                  <Text style={styles.subject}>{info.subject}</Text>
                </View>
                <Text style={styles.discription}>{info.discription}</Text>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  onPress={() => deleteData(info.id)}
                  style={styles.button}
                >
                  <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        ) : (
          <Text>Loading</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default Page2;

const styles = StyleSheet.create({
  mainBox: {
    padding: 10,
    backgroundColor: "white",
    margin: 10,
    borderRadius: 15,
    elevation: 20,
    flex: 1,
    display: "flex",
    flexDirection: "row"
  },
  subMainBox: {
    flex: 5
  },
  boxHead: {
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 5
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black"
  },
  subject: {
    fontSize: 20,
    fontWeight: "bold",
    color: "gray"
  },
  discription: {
    color: "gray",
    fontSize: 18,
    paddingHorizontal: 5
  },
  buttonContainer: {
    flex: 1
  },
  buttonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold"
  },
  button: {
    flex: 1,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "lightgreen",
    height: "100%",
    borderRadius: 15
  }
});
