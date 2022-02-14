import React from "react";
import { StyleSheet, Text, View } from "react-native";

const RedirectShoppingList = () => {
  return (
    <View style={styles.body}>
      <Text>Go To Shopping List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    marginTop: 64,
    marginLeft: 16,
    color: "rgb(16,120,92)",
  },
});

export default RedirectShoppingList;
