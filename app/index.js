import {
  Text,
  View,
  StyleSheet,
  useWindowDimensions,
  Platform,
  SafeAreaView,
} from "react-native";
import CustomButton from "../components/CustomButton/CustomButton";
import * as SystemUI from "expo-system-ui";

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
          <Text
            style={[styles.text, { fontSize: windowWidth > 500 ? "60" : "24" }]}
          >
            Welcome!
          </Text>
          <CustomButton title="press me" onPress={() => alert("Pressed")} />
        </View>
      </View>
    </SafeAreaView>
  );
}

//handle the color of unsfe area
SystemUI.setBackgroundColorAsync("plum");

// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;

// key value pairs are used to define styles
const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "red",
  },
  container: {
    flex: 1,
    backgroundColor: "plum",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    backgroundColor: Platform.OS === "android" ? "lightblue" : "lightgreen",
    // height: windowHeight > 600 ? "70%" : "90%",
    // width: windowWidth > 500 ? "60%" : "90%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    // fontSize: windowWidth > 500 ? "60" : "24",
    ...Platform.select({
      ios: {
        color: "blue",
        fontStyle: "italic",
      },
      android: {
        color: "red",
        fontSize: 30,
      },
    }),
  },
});
