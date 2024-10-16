import { Text, View, Image } from "react-native";
// import LogoImg from "../assets/images/icon.png";
const LogoImg = require("../assets/images/icon.png"); // require is used to import images

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
      <Image
        source={{ uri: "https://picsum.photos/200" }} // need to pass object with uri key for network images
        style={{
          height: 200,
          width: 200,
        }} // mandatory to set height and width
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
