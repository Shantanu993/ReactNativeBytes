import { View, StyleSheet } from "react-native";
import * as SystemUI from "expo-system-ui";

export default function Index() {
  return <View style={styles.container}></View>;
}

SystemUI.setBackgroundColorAsync("#f5f5f5");
// key value pairs are used to define styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
});
