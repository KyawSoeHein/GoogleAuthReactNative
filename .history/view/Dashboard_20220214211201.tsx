import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/profile.jpg")}
        style={styles.profileImage}
      />
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
    borderRadius: 64,
  },
});

export default Dashboard;
