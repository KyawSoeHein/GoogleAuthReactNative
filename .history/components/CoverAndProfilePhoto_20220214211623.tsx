import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";

const CoverAndProfilePhoto = () => {
  return (
    <SafeAreaView>
      {/* <Image
        source={require("../assets/profile.jpg")}
        style={styles.profileImage}
      /> */}
      <Text style={{ fontSize: 64, color: "black" }}>hello</Text>
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

export default CoverAndProfilePhoto;
