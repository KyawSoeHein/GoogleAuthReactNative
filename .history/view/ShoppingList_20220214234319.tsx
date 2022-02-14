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
import { useSelector } from "react-redux";
import CustomSafeAreaView from "../components/CustomSafeAreaView";

const ShoppingList = () => {
  const [itemList, setItemList] = useState(["Orange", "Apple"]);
  const [newItem, setNewItem] = useState("");

  const items = useSelector((state) => state.items.items);

  function addNewItem() {
    setItemList([...itemList, newItem]);
    setNewItem("");
  }

  return (
    <CustomSafeAreaView>
      <TextInput
        placeholder="Add New Item"
        style={styles.outline}
        value={newItem}
        onChange={(event) => setNewItem(event.nativeEvent.text)}
      ></TextInput>
      <View style={{ alignItems: "center", marginTop: 32 }}>
        <FlatList
          scrollEnabled={false}
          data={itemList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return <Text style={styles.itemText}>{item}</Text>;
          }}
        />
        <TouchableRipple
          style={styles.addButton}
          onPress={() => {
            if (newItem.length > 0) addNewItem();
          }}
        >
          <Text style={{ color: "white", fontSize: 14, fontWeight: "bold" }}>
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
    paddingVertical: 12,
    marginTop: 48,
    borderRadius: 32,
  },
});

export default ShoppingList;
