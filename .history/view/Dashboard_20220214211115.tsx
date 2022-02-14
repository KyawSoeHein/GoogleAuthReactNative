import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../assets/profile.jpg")} />
    </SafeAreaView>
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
    borderRadius: 32,
  },
});

export default Dashboard;
