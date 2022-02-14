import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/profile.jpg")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  profileImage: {
    width: 100,
    height: 100,
  },
});

export default Dashboard;
