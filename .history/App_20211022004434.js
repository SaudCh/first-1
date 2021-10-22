import { StatusBar } from "expo-status-bar";
import { View, Text, LogBox, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Main from "./assets/Main/Main";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeatureCities from "./assets/Main/FeatureCities";
import FeatureListings from "./assets/Main/FeatureListings";
import Favourite from "./assets/Main/Favourite";
import AdvanceSearch from "./assets/Main/AdvanceSearch";
import { FontAwesome5, FontAwesome, AntDesign } from "@expo/vector-icons";
import Property from "./assets/Property/property";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const FirstScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FeatureCities"
        component={FeatureCities}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Property"
        component={Property}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const BottomTabHomeButton = ({ children, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      justifyContent: "center",
      alignItems: "center",
      top: -30,
    }}
  >
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "#e32f45",
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

function MainBottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName={"Home"}
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          borderColor: "black",
          borderTopWidth: 2,
          bottom: 25,
          left: 20,
          right: 20,
          backgroundColor: "#ffff",
          borderRadius: 15,
          height: 90,
          ...styles.boxShadow,
        },
      }}
    >
      <Tab.Screen
        name="FeatureCitites"
        component={FeatureCities}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <AntDesign
                name="staro"
                size={25}
                color="black"
                style={{ color: focused ? "#e32f45" : "#748c94" }}
              />
              <View>
                <Text
                  style={{
                    color: focused ? "#e32f45" : "#748c94",
                    fontSize: 12,
                  }}
                >
                  Feature
                </Text>
                <Text
                  style={{
                    color: focused ? "#e32f45" : "#748c94",
                    fontSize: 12,
                  }}
                >
                  Cities
                </Text>
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="FeatureListings"
        component={FeatureListings}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <FontAwesome5
                name="city"
                size={25}
                color="black"
                style={{ color: focused ? "#e32f45" : "#748c94" }}
              />
              <View>
                <Text
                  style={{
                    color: focused ? "#e32f45" : "#748c94",
                    fontSize: 12,
                  }}
                >
                  Feature
                </Text>
                <Text
                  style={{
                    color: focused ? "#e32f45" : "#748c94",
                    fontSize: 12,
                  }}
                >
                  Listings
                </Text>
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Main}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <FontAwesome
                name="home"
                size={35}
                color="black"
                style={{ color: "white" }}
              />
            </View>
          ),
          tabBarButton: (props) => <BottomTabHomeButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Advance Search"
        component={AdvanceSearch}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <AntDesign
                name="search1"
                size={25}
                color="black"
                style={{ color: focused ? "#e32f45" : "#748c94" }}
              />
              <View>
                <Text
                  style={{
                    color: focused ? "#e32f45" : "#748c94",
                    fontSize: 12,
                  }}
                >
                  Advance
                </Text>
                <Text
                  style={{
                    color: focused ? "#e32f45" : "#748c94",
                    fontSize: 12,
                  }}
                >
                  {" "}
                  Search
                </Text>
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <AntDesign
                name="hearto"
                size={25}
                color="black"
                style={{ color: focused ? "#e32f45" : "#748c94" }}
              />
              <View>
                <Text
                  style={{
                    color: focused ? "#e32f45" : "#748c94",
                    fontSize: 12,
                  }}
                >
                  Favourites
                </Text>
              </View>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  LogBox.ignoreLogs(["VirtualizedLists "]); // Ignore log notification by message
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainBottomTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
});
