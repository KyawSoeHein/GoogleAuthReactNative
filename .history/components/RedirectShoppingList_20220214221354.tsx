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
    width: "90%",
    marginTop: 64,
  },
});

export default RedirectShoppingList;
