import { Text, View, Image, ImageBackground, ScrollView } from "react-native";
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
          {/* <Image
          source={LogoImg}
          style={{
            height: 200,
            width: 200,
          }}
        /> */}
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
            consectetur adipisicing elit. Reprehenderit exercitationem dolorem
            quam vero amet sunt magnam voluptatem quasi, suscipit accusamus
            doloremque vitae impedit quas voluptas cum perferendis aliquam
            veniam atque nobis porro eaque nulla aspernatur libero. Hic quia
            laudantium obcaecati debitis fugit amet numquam. Tenetur natus illum
            quaerat doloribus et.
          </Text>
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
