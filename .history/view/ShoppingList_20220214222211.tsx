import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import CoverAndProfilePhoto from "../components/CoverAndProfilePhoto";
import RedirectShoppingList from "../components/RedirectShoppingList";

const ShoppingList = () => {
  return (
    <SafeAreaView>
      <CoverAndProfilePhoto />

      <RedirectShoppingList />
    </SafeAreaView>
  );
};

export default DashbShoppingListoard;
