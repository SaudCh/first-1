import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  HStack,
  Input,
  NativeBaseProvider,
  Select,
  CheckIcon,
  Checkbox,
  ScrollView,
} from "native-base";
import Header from "../Shared/header";
import Footer from "../Shared/Footer";
import { marginBottom } from "styled-system";

export default function AdvanceSearch() {
  const [propertyType, setPropertyType] = useState();
  const [justListing, setJustListing] = useState();
  return (
    <NativeBaseProvider>
      <ScrollView>
        <Header />
        <View style={{ ...styles.container }}>
          <Text style={{ ...styles.Heading }}>Advance MLS Search</Text>
          <Text style={{ ...styles.text, marginBottom: 10 }}>Quick Search</Text>
          <Input
            isFullWidth="false"
            style={styles.SearchBar}
            placeholder="Enter a community, Addreess or Zip Code..."
          />
          <Text
            style={{
              marginTop: 15,
              ...styles.text,
              color: "#09AFFF",
              borderBottomColor: "#09afff",
              borderBottomWidth: 3,
              borderStyle: "dotted",
              width: "90%",
            }}
          >
            Search Criteria:
          </Text>
          <View style={{ marginVertical: 15 }}>
            <Text style={{ ...styles.text }}>Property Type</Text>
            <Select
              selectedValue={propertyType}
              value={propertyType}
              minWidth="200"
              accessibilityLabel="Select Property Type"
              placeholder="Select Property Type"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={2}
              w={{
                base: "90%",
                md: "25%",
              }}
              style={{ backgroundColor: "white" }}
              onValueChange={(itemValue) => setPropertyType(itemValue)}
            >
              <Select.Item label="Homes" value="Homes" />
              <Select.Item label="Condos" value="Condos" />
              <Select.Item label="Vacant Land" value="Vacant Land" />
              <Select.Item label="Commercial" value="Commercial" />
              <Select.Item label="Multi-Family" value="Multi Family" />
              <Select.Item label="Town Homes" value="Town Homes" />
              <Select.Item label="Boat Dock" value="Boat Dock" />
            </Select>
          </View>
          <View style={{ marginBottom: 15 }}>
            <Text style={{ ...styles.text }}>City</Text>
            <Select
              selectedValue={propertyType}
              value={propertyType}
              minWidth="200"
              accessibilityLabel="Select Property Type"
              placeholder="Select Property Type"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={2}
              w={{
                base: "90%",
                md: "25%",
              }}
              style={{ backgroundColor: "white" }}
              onValueChange={(itemValue) => setPropertyType(itemValue)}
            >
              <Select.Item label="Ave Maria" value="Ave Maria" />
              <Select.Item label="Bonita Springs" value="Bonita Springs" />
              <Select.Item label="Cape Coral" value="Cape Coral" />
              <Select.Item label="Estero" value="Estero" />
              <Select.Item label="Fort Myers" value="Fort Myers" />
              <Select.Item label="Immokalee" value="Immokalee" />
              <Select.Item label="Lehigh Acres" value="Lehigh Acres" />
              <Select.Item label="Marco Island" value="Marco Island" />
              <Select.Item label="Naples" value="Naples" />
            </Select>
          </View>
          <Text style={{ fontSize: 20, alignSelf: "center", marginBottom: 15 }}>
            --OR--
          </Text>
          <Text style={{ ...styles.text, marginBottom: 10 }}>Zip Code</Text>
          <Input
            isFullWidth="false"
            style={{ ...styles.SearchBar, marginBottom: 15 }}
            placeholder="e.g. 34109,34110"
          />
          <View>
            <Checkbox.Group
              colorScheme="green"
              defaultValue={justListing}
              accessibilityLabel="pick an item"
              onChange={(values) => {
                setJustListing(values || []);
              }}
            >
              <Checkbox value="Just Listed" my="2">
                Just Listed
              </Checkbox>
              <Checkbox value="Include Pending" my="2">
                Include Pending
              </Checkbox>
              <Checkbox value="Include Sold" my="2">
                Include Sold
              </Checkbox>
              <Checkbox value="Foreclosure" my="2">
                Foreclosure
              </Checkbox>
              <Checkbox value="Short Sale" my="2">
                Short Sale
              </Checkbox>
            </Checkbox.Group>
          </View>
          <View>
            <Text
              style={{
                marginTop: 15,
                ...styles.text,
                color: "#09AFFF",
                borderBottomColor: "#09afff",
                borderBottomWidth: 3,
                borderStyle: "dotted",
                width: "90%",
                marginBottom: 15,
              }}
            >
              Advance Search:
            </Text>
            <Text style={{ ...styles.text, marginBottom: 10 }}>Min Price</Text>
            <Input
              isFullWidth="false"
              style={{ ...styles.SearchBar, marginBottom: 15 }}
              placeholder="Minimum price"
            />
            <Text style={{ ...styles.text, marginBottom: 10 }}>Max Price</Text>
            <Input
              isFullWidth="false"
              style={{ ...styles.SearchBar, marginBottom: 15 }}
              placeholder="Maximum price"
            />
            <View style={{ marginBottom: 15 }}>
              <Text style={{ ...styles.text }}>Beds</Text>
              <Select
                selectedValue={propertyType}
                value={propertyType}
                minWidth="200"
                accessibilityLabel="Any # of Beds"
                placeholder="Any # of Beds"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon size="5" />,
                }}
                mt={2}
                w={{
                  base: "90%",
                  md: "25%",
                }}
                style={{ backgroundColor: "white" }}
                onValueChange={(itemValue) => setPropertyType(itemValue)}
              >
                <Select.Item label="1+" value="1+" />
                <Select.Item label="1+ Den" value="1+Den" />
                <Select.Item label="2+" value="2+" />
                <Select.Item label="2+ Den" value="2+Den" />
                <Select.Item label="3+" value="3+" />
                <Select.Item label="3+ Den" value="3+Den" />
                <Select.Item label="4+" value="4+" />
                <Select.Item label="4+ Den" value="4+Den" />
                <Select.Item label="5+" value="5+" />
                <Select.Item label="5+ Den" value="5+Den" />
                <Select.Item label="6+" value="6+" />
                <Select.Item label="6+ Den" value="6+Den" />
                <Select.Item label="7+" value="7+" />
                <Select.Item label="7+ Den" value="7+Den" />
                <Select.Item label="8+" value="8+" />
                <Select.Item label="8+ Den" value="8+Den" />
                <Select.Item label="9+" value="9+" />
                <Select.Item label="9+ Den" value="9+Den" />
                <Select.Item label="10+" value="10+" />
                <Select.Item label="10+ Den" value="10+Den" />
              </Select>
            </View>
            <Checkbox.Group
              colorScheme="green"
              defaultValue={justListing}
              accessibilityLabel="pick an item"
              onChange={(values) => {
                setJustListing(values || []);
              }}
            >
              <Checkbox value="Pool" my="2">
                Pool
              </Checkbox>
              <Checkbox value="Spa" my="2">
                Spa
              </Checkbox>
              <Checkbox value="Guest House" my="2">
                Guest House
              </Checkbox>
              <Checkbox value="Gatted Community" my="2">
                Gatted Community
              </Checkbox>
              <Checkbox value="Waterfront" my="2">
                Waterfront
              </Checkbox>
              <Checkbox value="Gulf Access" my="2">
                Gulf Access
              </Checkbox>
            </Checkbox.Group>
          </View>
        </View>
        <Footer />
      </ScrollView>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 20,
    paddingTop: 20,
    paddingLeft: 20,
    backgroundColor: "white",
    borderRadius: 20,
  },
  Heading: {
    fontSize: 25,
    lineHeight: 36,
    marginBottom: 10,
    fontWeight: "700",
  },
  SearchBar: {
    width: "90%",
    backgroundColor: "white",
  },
  text: {
    fontWeight: "600",
    fontSize: 20,
  },
});
