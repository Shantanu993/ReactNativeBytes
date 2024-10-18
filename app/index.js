import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.lightGreen]}>
        {/* multiple styles can be applied by passing array to the style prop*/}
        <Text
          style={{
            borderWidth: 2,
            borderColor: "blue",
            borderRadius: 5,
            padding: 10,
            backgroundColor: "yellow",
          }}
        >
          LightGreen box
        </Text>
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
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "purple",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  lightGreen: {
    backgroundColor: "lightgreen",
  },
  lightBlue: {
    backgroundColor: "lightblue",
  },
});
