import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
  ImageBackground,
  Alert,
} from "react-native";
import {
  Entypo,
  Ionicons,
  FontAwesome,
  AntDesign,
  FontAwesome5,
  EvilIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Button } from "native-base";

export default function Videos(props) {
  const { item } = props;
  //console.log();
  //console.log(JSON.parse(item.other_fields_json).VirtualTourURL2);
  var link = JSON.parse(item.other_fields_json).VirtualTourURL;
  if (link == "") {
    link = JSON.parse(item.other_fields_json).VirtualTourURL2;
  }

  //console.log(item.DefaultPic);
  const openVideo = async () => {
    const isSpupported = await Linking.canOpenURL(link);
    if (isSpupported) {
      await Linking.openURL(link);
    } else {
      Alert.alert("Invalid Link");
    }
  };
  return (
    <View>
      <Button onPress={() => openVideo()}>Click Me</Button>
      {link ? (
        <View style={{ ...styles.card }}>
          <Text style={{ ...styles.Heading }}>Virtual Tour</Text>
          <Text style={{}}>{item.VirtualTour}</Text>
          <View style={styles.container}>
            <ImageBackground
              source={{ uri: `http://first1.us/${item.DefaultPic}` }}
              resizeMode="cover"
              style={styles.image}
            >
              <View
                style={{
                  backgroundColor: "rgba(0,0,0,0.3)",
                  width: "100%",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AntDesign name="playcircleo" size={80} color="white" />
              </View>
            </ImageBackground>
          </View>
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginVertical: 20,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  Heading: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: "#2D3954",
    borderBottomColor: "#f5f6fa",
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 10,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 400,
  },
  container: {
    marginBottom: 25,
  },
});