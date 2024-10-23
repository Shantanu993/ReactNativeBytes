import { Text, View, StyleSheet, Dimensions } from "react-native";
import { useState, useEffect } from "react";

export default function Index() {
  const [dimensions, setDimensions] = useState({
    window: Dimensions.get("window"),
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setDimensions({ window });
    });

    return () => subscription?.remove();
  });

  const { window } = dimensions;
  const windowWidth = window.width;
  const windowHeight = window.height;

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.box,
          {
            height: windowHeight > 600 ? "70%" : "90%",
            width: windowWidth > 500 ? "60%" : "90%",
          },
        ]}
      >
        <Text style={{ fontSize: windowWidth > 500 ? "60" : "24" }}>
          Welcome!
        </Text>
      </View>
    </View>
  );
}

// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;

// key value pairs are used to define styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    backgroundColor: "lightblue",
    // height: windowHeight > 600 ? "70%" : "90%",
    // width: windowWidth > 500 ? "60%" : "90%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    // fontSize: windowWidth > 500 ? "60" : "24",
  },
});
