import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  SafeAreaView,
  FlatList,
  SectionList,
  TextInput,
} from "react-native";
import { useState } from "react";

export default function Index() {
  const [name, setName] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your Name"
        secureTextEntry={false}
      />
      <Text style={styles.text}>My name is {name}</Text>
    </SafeAreaView>
  );
}

// key value pairs are used to define styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight, //for android
  },
  input: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    margin: 10,
    height: 40,
  },
  text: {
    fontSize: 20,
    margin: 10,
  },
});
