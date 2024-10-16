import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "plum",
      }}
    >
      <View
        style={{
          backgroundColor: "lightblue",
          padding: 10,
          height: 200,
          width: 200,
        }}
      ></View>
      <View
        style={{
          backgroundColor: "lightgreen",
          padding: 10,
          height: 200,
          width: 200,
        }}
      ></View>
      <Text>Hello World!</Text>
    </View>
  );
}
