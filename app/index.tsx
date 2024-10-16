import {
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
} from "react-native";
import { useState } from "react";
// import LogoImg from "../assets/images/icon.png";
const LogoImg = require("../assets/images/icon.png"); // require is used to import images

export default function Index() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "plum",
        padding: 20,
      }}
    >
      <ScrollView>
        {/* it needs a bounded height so you can style it but it overlaps with the mobile status bar so nest it inside the view component so that scroll view occupies the full height of its parent component */}
        <ImageBackground
          source={LogoImg}
          style={{
            flex: 1,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            title="Open Modal"
            onPress={() => setIsModalVisible(true)}
            color="red"
          />
          <Modal
            visible={isModalVisible}
            onRequestClose={() => setIsModalVisible(false)} // add gesture or back button closing for android
            animationType="slide" // add animation to modal
            presentationStyle="pageSheet" // only for ios
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "green",
              }}
            >
              <Text>Modal Content</Text>
              <Button
                title="Close Modal"
                onPress={() => setIsModalVisible(false)}
                color="red"
              />
            </View>
          </Modal>
          <Pressable
            onPress={() => console.log("text pressed")}
            style={{
              backgroundColor: "blue",
              padding: 10,
              margin: 10,
              borderRadius: 5,
            }}
          >
            <Text style={{ color: "white" }}>
              pressable text and not a button
            </Text>
          </Pressable>
          <Pressable
            onPress={() => console.log("Image onPress pressed")}
            onLongPress={() => console.log("Image onLongPress pressed")}
            onPressIn={() => console.log("Image onPressIn pressed")}
            onPressOut={() => console.log("Image onPressOut pressed")}
          >
            <Image
              source={{ uri: "https://picsum.photos/200" }} // need to pass object with uri key for network images
              style={{
                height: 200,
                width: 200,
              }} // mandatory to set height and width
            />
          </Pressable>
          <View
            style={{
              backgroundColor: "lightgreen",
              height: 200,
              width: 200,
            }}
          ></View>
          <Text>
            Hello World!{" "}
            <Text style={{ color: "blue" }}>This is nested text</Text>
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            velit nostrum hic natus animi ipsum id, culpa possimus minima amet
            quidem? Cum optio harum esse dicta modi cupiditate, doloremque
            fuga?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Labore officiis obcaecati error porro, minus mollitia minima sed
            animi unde! Molestiae sapiente libero sed incidunt, ea aspernatur
            eos quisquam facilis maiores. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Placeat ducimus hic qui. Nisi, velit
            ipsam? Fugiat impedit officia ad maxime. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Aperiam, velit nostrum hic natus animi
            ipsum id, culpa possimus minima amet quidem? Cum optio harum esse
            dicta modi cupiditate, doloremque fuga?Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Labore officiis obcaecati error porro,
            minus mollitia minima sed animi unde! Molestiae sapiente libero sed
            incidunt, ea aspernatur eos quisquam facilis maiores. Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Placeat ducimus hic
            qui. Nisi, velit ipsam? Fugiat impedit officia ad maxime.
          </Text>
        </ImageBackground>
      </ScrollView>
    </View>
  );
}
