import {
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
  StatusBar,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useState } from "react";
// import LogoImg from "../assets/images/icon.png";
const LogoImg = require("../assets/images/icon.png"); // require is used to import images
import Greet from "../components/Greet";

export default function Index() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isStatusBarVisible, setIsStatusBarVisible] = useState(false);
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
      <StatusBar
        backgroundColor="green"
        barStyle="dark-content"
        hidden={isStatusBarVisible}
      />
      <View
        style={{
          padding: 5,
          backgroundColor: "blue",
          marginBottom: 10,
          borderRadius: 10,
        }}
      >
        <Button
          title="Toggle Status Bar Visibility"
          onPress={() => setIsStatusBarVisible(!isStatusBarVisible)}
          color="white"
        />
      </View>

      <Greet name="Custom Component" />

      <ActivityIndicator size="large" color="green" animating={true} />

      <Button
        title="Show Alert 1"
        onPress={() => Alert.alert("Alert 1 Title")}
      />
      <Button
        title="Show Alert 2"
        onPress={() => Alert.alert("Alert 2 Title", "Alert 2 Message")}
      />
      <Button
        title="Show Alert 3"
        onPress={() =>
          Alert.alert("Alert 3 Title", "Alert 3 Message", [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
            },
            { text: "OK", onPress: () => console.log("OK Pressed") },
            {
              text: "NOT SURE",
              onPress: () => console.log("NOT SURE Pressed"),
            },
          ])
        }
      />

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
            onRequestClose={() => setIsModalVisible(false)} // add gesture or back button closing for android. or when it is dimissed by other interactions
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
