import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Dashboard = () => {
  return (
    <View>
      <Image source={require("../assets/profile.jpg")} />
    </View>
  );
};

const styles = StyleSheet.create({
  profileImage: {
    width: 100,
    height: 100,
  },
});

export default Dashboard;
