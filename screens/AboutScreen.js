import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "expo-router";

const AboutScreen = () => {
  //using useNavigation hook
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Screen</Text>
      <Button
        title="Go to Home Screen"
        onPress={() => {
          navigation.navigate("Home");
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

export default AboutScreen;
