import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, TextInput, Text, View, Pressable } from "react-native";
import Toast from "react-native-toast-message";
import { signup, createUser } from "../components/api";
export default function Signup({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const handleSubmit = () => {
    if (email === "" || password === "" || name === "") {
      Toast.show({
        type: "error",
        text1: "Please fill all the fields",
        text2: "error",
      });
    } else {
      signup({
        email: email,
        password: password,
      })
        .then((res) => {
          console.log(res?.data?.message);

          const packet = {
            uid: res?.data?.user?.user?.uid,
            name: name,
            email: res?.data?.user?.user?.email,
          };


          createUser(packet)
            .then((res) => {
              console.log(res);
            })
            .catch(() => {
              console.log(err);
            });


          Toast.show({
            type: "success",
            text1: `${res?.data?.message}`,
            text2: "success",
          });
          navigation.push("dashboard");
        })
        .catch((err) => {
          Toast.show({
            type: "error",
            text1: `${err?.response?.data?.error}`,
            text2: "error",
          });
        });
    }
  };
  return (
    <View style={styles.container}>
      <Toast ref={(ref) => Toast.setRef(ref)} />

      <View style={styles.headerWrapper}>
        <Text style={styles.TextInput}>Signup</Text>
      </View>
      <StatusBar style="auto" />

      <TextInput
        value={name}
        onChangeText={(text) => setName(text)}
        style={styles.input}
        placeholder="Name"
      />

      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="password"
        secureTextEntry={true}
      />

      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.text}>Signup</Text>
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
