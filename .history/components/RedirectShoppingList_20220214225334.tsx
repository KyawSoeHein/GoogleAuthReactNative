import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableRipple } from "react-native-paper";

const RedirectShoppingList: FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <TouchableRipple
      style={styles.body}
      onPress={() => navigation.navigate("ShoppingList")}
    >
      <Text
        style={{ color: "rgb(16,120,92)", textDecorationLine: "underline" }}
      >
        Go To Shopping List
      </Text>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  body: {
    marginTop: 64,
    marginLeft: 16,
  },

  outline: {
    marginTop: 8,
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderColor: "rgb(16,120,92)",
    borderWidth: 1,
    borderRadius: 8,
  },
});

export default RedirectShoppingList;
