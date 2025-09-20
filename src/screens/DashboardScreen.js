import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function DashboardScreen({ navigation }) {
  const startTrip = () => {
    // In a real app, you might choose a trip ID or details here.
    // For now we just navigate to TripScreen.
    navigation.navigate("Trip");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Text style={styles.subtitle}>
        Welcome! Here you could list active trips, stats, etc.
      </Text>
      <Button title="Start Trip" onPress={startTrip} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
});
