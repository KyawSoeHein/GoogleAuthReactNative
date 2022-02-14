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
            return <Text>{item}</Text>;
          }}
        />
        <TouchableRipple>
          <Text>Add</Text>
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
});

export default ShoppingList;
