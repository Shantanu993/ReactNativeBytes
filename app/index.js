import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  SafeAreaView,
} from "react-native";
import pokemonList from "../data.json";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {pokemonList.map((pokemon) => (
          <View key={pokemon.id} style={styles.pokemonCard}>
            <Text style={styles.cardText}>{pokemon.name}</Text>
            <Text style={styles.cardText}>{pokemon.type}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

// key value pairs are used to define styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight, //for android
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  pokemonCard: {
    backgroundColor: "white",
    padding: 10,
    margin: 5,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 20,
  },
});
