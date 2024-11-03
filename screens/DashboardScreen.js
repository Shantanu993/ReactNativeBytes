import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const DashboardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>DashboardScreen Screen</Text>
      <Button title="Toggle Drawer" onPress={() => navigation.toggleDrawer()} />
      <Button
        title="Open Settings"
        onPress={() => navigation.jumpTo("Settings")}
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

export default DashboardScreen;
