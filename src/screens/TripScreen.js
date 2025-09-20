import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import * as Location from "expo-location";
import MapViewComponent from "../components/MapViewComponent";

export default function TripScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  // Ask permission and fetch location
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      const loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
    })();
  }, []);

  // Refresh location manually
  const refreshLocation = async () => {
    const loc = await Location.getCurrentPositionAsync({});
    setLocation(loc);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Trip Screen</Text>

      {errorMsg ? (
        <Text style={styles.error}>{errorMsg}</Text>
      ) : location ? (
        <>
          <Text style={styles.coords}>
            Current Location:
            {"\n"}Lat: {location.coords.latitude.toFixed(6)},{"  "}Lng:{" "}
            {location.coords.longitude.toFixed(6)}
          </Text>

          {/* Map showing the user's position */}
          <View style={styles.mapContainer}>
            <MapViewComponent
              latitude={location.coords.latitude}
              longitude={location.coords.longitude}
            />
          </View>
        </>
      ) : (
        <Text>Fetching location...</Text>
      )}

      <Button title="Refresh Location" onPress={refreshLocation} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  coords: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 16,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
  mapContainer: {
    width: "100%",
    height: 300,
    marginBottom: 20,
    borderRadius: 12,
    overflow: "hidden",
  },
});
