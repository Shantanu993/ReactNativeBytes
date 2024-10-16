import { Text, View, Image } from "react-native";
import LogoImg from "../assets/images/icon.png";

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
      <Image
        source={LogoImg}
        style={{
          height: 200,
          width: 200,
        }}
      />
      <View
        style={{
          backgroundColor: "lightgreen",
          height: 200,
          width: 200,
        }}
      ></View>
      <Text>
        Hello World! <Text style={{ color: "blue" }}>This is nested text</Text>
      </Text>
    </View>
  );
}
