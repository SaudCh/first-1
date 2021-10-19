import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  Image,
  View,
  Button,
} from "react-native";
import SelectedCityCard from "./SelectedCityCard";
import FeatureCity from "./SelectedFeatureCity";

export default function SelectedFeatureCity(props) {
  const { city } = props;
  const dummy = {
    header_img: "Hello",
  };
  const [isLoading, setLoading] = useState(false);
  const [selectedCity, setCity] = useState(dummy);

  const getMovies = async () => {
    try {
      var cond = `where city_id = ${city}`;
      const response = await fetch(
        `https://first1.us/api/cities.php?cond=${cond}`
      );

      const json = await response.json();
      //console.log(json.data[0].city_id);
      if (json) {
        setCity(json.data[0]);
      }

      //console.log(selectedCity.city_id);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(true);
    }
    setAmount(500);
    setRead("more");
  };

  useEffect(() => {
    getMovies();
  }, [city]);

  if (isLoading) {
    return <SelectedCityCard selectedCity={selectedCity} />;
  } else {
    return (
      <View style={{ ...styles.activityContainer }}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }
}
const styles = StyleSheet.create({});
