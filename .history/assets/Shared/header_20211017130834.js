import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";

export default function header() {
  return (
    <View class="" style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../img/logo/logo-bg-null.png")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: "#4fcdc5",
  },
  logo: {
    paddingLeft: 10,
    width: 200,
    height: 80,
    resizeMode: "center",
  },
});
