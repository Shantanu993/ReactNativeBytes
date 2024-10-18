import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.lightGreen]}>
        <Text>LightGreen box</Text>
      </View>
      <View style={[styles.box, styles.lightBlue]}>
        <Text>LightBlue Box</Text>
      </View>
    </View>
  );
}

// key value pairs are used to define styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 100,
    height: 100,
    padding: 10,
  },
  lightGreen: {
    backgroundColor: "lightgreen",
  },
  lightBlue: {
    backgroundColor: "lightblue",
  },
});
