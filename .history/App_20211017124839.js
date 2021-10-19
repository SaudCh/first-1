import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, Image, View } from "react-native";
import Header from "./assets/Shared/header";

export default function App() {
  return (
    <View>
      <Header />
      <Text h1>Feature City</Text>
      <StatusBar style="auto" />
    </View>
  );
}
