import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import { TouchableRipple } from "react-native-paper";
import { white } from "react-native-paper/lib/typescript/styles/colors";
import CustomSafeAreaView from "../components/CustomSafeAreaView";

const ShoppingList = () => {
  const [itemList, setItemList] = useState(["Orange", "Apple"]);

  return (
    <CustomSafeAreaView>
      <TextInput style={styles.outline}></TextInput>
      <View style={{ alignItems: "center", marginTop: 32 }}>
        <FlatList
          data={itemList}
          //   keyExtractor={(item, index) => index}
          renderItem={({ item }) => {
            return <Text style={styles.itemText}>{item}</Text>;
          }}
        />
        <TouchableRipple style={styles.addButton}>
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            ADD
          </Text>
        </TouchableRipple>
      </View>
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

  itemText: {
    fontSize: 16,
    marginTop: 8,
  },

  addButton: {
    backgroundColor: "rgb(16,120,92)",
    paddingHorizontal: 32,
    paddingVertical: 16,
    marginTop: 64,
    borderRadius: 32,
  },
});

export default ShoppingList;
