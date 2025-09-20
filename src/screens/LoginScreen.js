import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Alert,
} from "react-native";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleAuth = async () => {
    if (!email.trim() || !password) {
      Alert.alert("Validation", "Please enter email and password");
      return;
    }

    setLoading(true);
    try {
      if (isSignUp) {
        // Sign up new user
        await createUserWithEmailAndPassword(auth, email.trim(), password);
        Alert.alert("Success", "Account created successfully!");
      } else {
        // Sign in existing user
        await signInWithEmailAndPassword(auth, email.trim(), password);
      }
      navigation.replace("Dashboard");
    } catch (err) {
      console.error("Auth error", err);
      let errorMessage = "Unknown error occurred";

      // Handle specific Firebase auth errors
      switch (err.code) {
        case "auth/email-already-in-use":
          errorMessage = "Email already registered";
          break;
        case "auth/invalid-email":
          errorMessage = "Invalid email address";
          break;
        case "auth/weak-password":
          errorMessage = "Password should be at least 6 characters";
          break;
        case "auth/user-not-found":
          errorMessage = "No user found with this email";
          break;
        case "auth/wrong-password":
          errorMessage = "Incorrect password";
          break;
        case "auth/network-request-failed":
          errorMessage = "Network error. Please check your connection";
          break;
        default:
          errorMessage = err.message;
      }

      Alert.alert(isSignUp ? "Sign Up Failed" : "Login Failed", errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // For demo purposes - bypass login
  const handleDemoLogin = () => {
    navigation.replace("Dashboard");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>RTN Telematics</Text>
      <Text style={styles.subtitle}>Driver Portal</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        autoCorrect={false}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        autoCorrect={false}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleAuth}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>
            {isSignUp ? "Sign Up" : "Login"}
          </Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.linkButton}
        onPress={() => setIsSignUp(!isSignUp)}
      >
        <Text style={styles.linkText}>
          {isSignUp
            ? "Already have an account? Login"
            : "Don't have an account? Sign Up"}
        </Text>
      </TouchableOpacity>

      <View style={styles.divider} />

      <TouchableOpacity
        style={[styles.button, styles.demoButton]}
        onPress={handleDemoLogin}
      >
        <Text style={styles.buttonText}>Continue with Demo Mode</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 8,
    textAlign: "center",
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 32,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#667eea",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  demoButton: {
    backgroundColor: "#6b7280",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  linkButton: {
    marginTop: 16,
    alignItems: "center",
  },
  linkText: {
    color: "#667eea",
    fontSize: 14,
  },
  divider: {
    height: 1,
    backgroundColor: "#e5e7eb",
    marginVertical: 24,
  },
});
