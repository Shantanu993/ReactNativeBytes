import {
  Text,
  View,
  StyleSheet,
  useWindowDimensions,
  SafeAreaView,
} from "react-native";

export default function Index() {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  return (
    <SafeAreaView style={styles.safeContainer}>
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
    </SafeAreaView>
  );
}

// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;

// key value pairs are used to define styles
const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "plum",
  },
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
