import React from "react";
import { StyleSheet, Text, View } from "react-native";

const RedirectShoppingList = () => {
  return (
    <View style={styles.body}>
      <Text style={{}}>Go To Shopping List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    marginTop: 64,
    marginLeft: 16,
  },

  text: {
    color: "rgb(16,120,92)",
    underline: { textDecorationLine: "underline" },
  },
});

export default RedirectShoppingList;
