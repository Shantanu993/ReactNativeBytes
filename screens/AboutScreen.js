import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "expo-router";

const AboutScreen = ({ route }) => {
  //accessing the name parameter
  const { name } = route.params;

  //using useNavigation hook
  const navigation = useNavigation();

  //setting the title of the screen dynamically
  useLayoutEffect(() => {
    // using useEffect hook would also work but would cause a delay in updating the title
    navigation.setOptions({
      title: name,
    });
  }, [navigation, name]);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About {name}</Text>
      <Button
        title="Update Name"
        onPress={() => {
          navigation.setParams({
            name: "updated name",
          });
        }}
      />
      <Button
        title="Go back with data to Home Screen"
        onPress={() => {
          navigation.navigate("Home", {
            result: "Data from About Screen",
          });
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
