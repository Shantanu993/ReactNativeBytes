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
  Switch,
} from "react-native";
import { useState } from "react";

export default function Index() {
  const [name, setName] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your Name"
        secureTextEntry={false}
      />
      <TextInput
        style={[styles.input, styles.multilineText]}
        value={name}
        onChangeText={setName}
        placeholder="Enter your Name"
        multiline
      />
      <Text style={styles.text}>My name is {name}</Text>
      <View style={styles.switchContainer}>
        <Text style={styles.text}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode((previousState) => !previousState)}
          trackColor={{ true: "green", false: "red" }}
          thumbColor={isDarkMode ? "green" : "red"}
        />
      </View>
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
  multilineText: {
    height: 100,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
  },
});
