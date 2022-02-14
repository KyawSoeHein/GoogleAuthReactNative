import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import CoverAndProfilePhoto from "../components/CoverAndProfilePhoto";
import RedirectShoppingList from "../components/RedirectShoppingList";

const Dashboard = () => {
  return (
    <SafeAreaView>
      <CoverAndProfilePhoto />

      <RedirectShoppingList />
    </SafeAreaView>
  );
};

export default Dashboard;
