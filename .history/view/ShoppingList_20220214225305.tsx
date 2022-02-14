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
      <TextInput></TextInput>
      <Text>Hello</Text>
    </CustomSafeAreaView>
  );
};

export default ShoppingList;
