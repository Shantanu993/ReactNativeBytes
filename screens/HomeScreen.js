import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

//using navigation prop
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title="Go to About"
        onPress={() => {
          navigation.navigate(
            "About",
            { name: "Shantanu" } //passing the name parameter using route parameters object
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
});

export default HomeScreen;
