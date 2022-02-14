import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";

const dividerSpace = 16;

const CoverAndProfilePhoto = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.CoverImage} />

      <Image
        source={require("../assets/profile.jpg")}
        style={styles.profileImage}
      />

      <Text style={styles.profileTitle}>Profile</Text>

      <View style={styles.body}>
        <Text style={styles.profileTitle}>Name</Text>
        <Text style={styles.profileTitle}>Email</Text>
        <Text style={styles.profileTitle}>Phone Number</Text>
      </View>
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
  },

  profileTitle: {
    fontSize: 24,
    color: "black",
    marginTop: dividerSpace,
  },

  body: {
    width: "90%",
  },
});

export default CoverAndProfilePhoto;
