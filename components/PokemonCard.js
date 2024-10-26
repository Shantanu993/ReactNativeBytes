import { View, Text, StyleSheet, Platform, Image } from "react-native";

export default function PokemonCard({
  name,
  image,
  type,
  hp,
  moves,
  weaknesses,
}) {
  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>{hp}</Text>
      </View>

      <Image
        source={image}
        style={styles.image}
        accessibilityLabel={`${name} pokemon`}
        resizeMode="contain"
      />

      <View>
        <Text>Moves: {moves.join(", ")}</Text>
      </View>
      <View>
        <Text>weakness: {weaknesses.join(", ")}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 2,
    margin: 16,
    padding: 16,
    ...Platform.select({
      ios: {
        shadowColor: "#333",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  name: {
    fontSize: 34,
    fontWeight: "bold",
  },
  hp: {
    fontSize: 22,
    color: "red",
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 16,
  },
});
