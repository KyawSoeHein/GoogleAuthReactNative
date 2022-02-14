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
    marginTop: -32,
  },

  CoverImage: {
    width: "90%",
    height: 150,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 24,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 24,
    backgroundColor: "rgb(241,241,244)",
    // backgroundColor:
    //   "linear-gradient(to right, rgb(235,241,237), rgb(241,241,244), rgb(247,240,248), rgb(235,241,237), rgb(238,228,232))",
  },
});

export default CoverAndProfilePhoto;
