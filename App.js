import React from "react";
import { StyleSheet, Text, View, } from "react-native";
import DogCaller from "./Components/DogCaller";



export default function App() {
  return (
    <View style={styles.container}>
      <DogCaller/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
