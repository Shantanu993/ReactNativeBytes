import { View, StyleSheet, Text, Platform } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import * as SystemUI from "expo-system-ui";
import PokemonCard from "../components/PokemonCard";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <PokemonCard />
        <Text>Index</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

SystemUI.setBackgroundColorAsync("#f5f5f5");
// key value pairs are used to define styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
