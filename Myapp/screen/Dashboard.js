import React from "react";
import { userList } from "../components/api";

import { View, StyleSheet, Text, StatusBar } from "react-native";

const Dashboard = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    userList().then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <View>
      <View style={styles.textContainer}>
        <Text style={styles.header}>DashBoard</Text>
      </View>
      {data?.map((item) => {
        return (
          <View style={styles.dataContainer}>
            <View style={styles.textField}>
              <Text style={styles.titleText}>id- </Text>
              <Text style={styles.text}>{item.id}</Text>
            </View>

            <View style={styles.textField}>
              <Text style={styles.titleText}>name- </Text>
              <Text style={styles.text}>{item.name}</Text>
            </View>

            <View style={styles.textField}>
              <Text style={styles.titleText}>email- </Text>
              <Text style={styles.text}>{item.email}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  title: {
    fontSize: 32,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
  },

  text: {
    fontSize: 16,
  },

  titleText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  dataContainer: {
    backgroundColor: "#32EECC",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  textField: {
    flexDirection: "row",
  },
  textContainer: {
    marginTop: 10,
    borderBottomColor: "teal",
    borderBottomWidth: 2,
    marginBottom: 50,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
