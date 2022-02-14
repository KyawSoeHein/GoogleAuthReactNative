import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import { TextInput } from "react-native-paper";
import CustomSafeAreaView from "../components/CustomSafeAreaView";

const ShoppingList = () => {
  return (
    <CustomSafeAreaView>
      <TextInput></TextInput>
      <Text>Hello</Text>
    </CustomSafeAreaView>
  );
};

export default ShoppingList;
