import { StatusBar } from "expo-status-bar";
import React from "react";
import axios from "axios";
import { StyleSheet, TextInput, Text, View, Pressable } from "react-native";
import Toast from "react-native-toast-message";
export default function Login({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const handleSubmit = () => {
    navigation.push("Login");
  };

  return (
    <View style={styles.container}>
      <Toast ref={(ref) => Toast.setRef(ref)} />

      <View style={styles.headerWrapper}>
        <Text style={styles.TextInput}>Welcome</Text>
      </View>
      <StatusBar style="auto" />

      <Pressable style={styles.button} onPress={()=>navigation.navigate("Signup")}>
        <Text style={styles.text}>Signup</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={()=>navigation.push("Login")}>
        <Text style={styles.text}>Login</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    width: 300,
    height: 50,
    borderColor: "#000000",
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    fontSize: 20,
    fontWeight: "400",
    color: "#000",
  },

  headerWrapper: {
    marginTop: 10,
    borderBottomColor: "teal",
    borderBottomWidth: 2,
    marginBottom: 50,
  },
  TextInput: {
    backgroundColor: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  button: {
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    borderRadius: 15,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
