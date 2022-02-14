import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
} from "react-native";
import CustomSafeAreaView from "../components/CustomSafeAreaView";

const ShoppingList = () => {
  return (
    <CustomSafeAreaView>
      <TextInput style={styles.outline}></TextInput>
      <Text>Hello</Text>
    </CustomSafeAreaView>
  );
};

const styles = StyleSheet.create({
  outline: {
    marginTop: 8,
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderColor: "rgb(16,120,92)",
    borderWidth: 1,
    borderRadius: 8,
  },
});

export default ShoppingList;
