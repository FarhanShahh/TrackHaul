import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function MapViewComponent({ latitude, longitude }) {
  const region = {
    latitude: latitude || 37.78825,
    longitude: longitude || -122.4324,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={region}>
        {latitude && longitude && (
          <Marker
            coordinate={{ latitude, longitude }}
            title="Current Location"
          />
        )}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
