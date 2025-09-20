// import React from "react";
// import { View, Text, Button, StyleSheet } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import LoginScreen from "./src/screens/LoginScreen";
// import DashboardScreen from "./src/screens/DashboardScreen";
// import TripScreen from "./src/screens/TripScreen";

// // Minimal placeholders to avoid import/runtime errors while we build the full screens
// function DashboardPlaceholder({ navigation }) {
//   return (
//     <View style={styles.center}>
//       <Text style={{ fontSize: 18, marginBottom: 12 }}>
//         Dashboard (placeholder)
//       </Text>
//       <Button
//         title="Open Trip (placeholder)"
//         onPress={() => navigation.navigate("Trip", { tripId: "demo-trip-id" })}
//       />
//     </View>
//   );
// }

// function TripPlaceholder({ route }) {
//   const { tripId } = route.params || {};
//   return (
//     <View style={styles.center}>
//       <Text style={{ fontSize: 18 }}>Trip Screen (placeholder)</Text>
//       <Text>Trip ID: {tripId}</Text>
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login">
//         <Stack.Screen
//           name="Login"
//           component={LoginScreen}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen name="Dashboard" component={DashboardScreen} />
//         <Stack.Screen name="Trip" component={TripScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   center: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 16,
//   },
// });

import React from "react";
import { View, Text } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Hello Expo!</Text>
    </View>
  );
}
