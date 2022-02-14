import React, { useState } from "react";
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
  const [searchBoxWidth, setSearchBoxWidth] = useState("50%");

  function extendWidth() {
    setSearchBoxWidth("90%");
  }

  function reduceWidth() {
    setSearchBoxWidth("50%");
  }

  return (
    <CustomSafeAreaView>
      <TextInput
        onFocus={() => extendWidth()}
        style={[styles.outline, { width: searchBoxWidth }]}
      ></TextInput>
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
    marginHorizontal: 32,
    textAlign: "center",
    alignSelf: "center",
  },
});

export default ShoppingList;
