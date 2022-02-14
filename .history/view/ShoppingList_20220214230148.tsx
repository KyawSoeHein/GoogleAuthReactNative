import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  FlatList,
} from "react-native";
import CustomSafeAreaView from "../components/CustomSafeAreaView";

const ShoppingList = () => {
  const [itemList, setItemList] = useState([]);

  return (
    <CustomSafeAreaView>
      <TextInput style={styles.outline}></TextInput>
      <FlatList data={itemList} />
    </CustomSafeAreaView>
  );
};

const styles = StyleSheet.create({
  outline: {
    width: "80%",
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
