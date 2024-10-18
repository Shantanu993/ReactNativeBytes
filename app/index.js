import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return <View style={styles.container}></View>;
}

// key value pairs are used to define styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    justifyContent: "center",
    alignItems: "center",
  },
});
