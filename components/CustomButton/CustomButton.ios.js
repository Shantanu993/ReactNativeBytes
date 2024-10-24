import { Pressable, Text } from "react-native";

const CustomButton = ({ title, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightyellow",
        borderRadius: 5,
        padding: 10,
      }}
    >
      <Text style={{ fontSize: 24, color: "green" }}>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;
