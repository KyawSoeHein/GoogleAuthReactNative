import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";

const CoverAndProfilePhoto = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.CoverImage} />

      <Image
        source={require("../assets/profile.jpg")}
        style={styles.profileImage}
      />
      <Text style={{ fontSize: 64, color: "black" }}>hello</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 64,
  },

  CoverImage: {
    height: 150,
    borderTopLeftRadius: 32,
    borderBottomRightRadius: 32,
    backgroundColor: "#000000",
  },
});

export default CoverAndProfilePhoto;
