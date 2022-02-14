import React, { FC } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Platform,
} from "react-native";
import CoverAndProfilePhoto from "../components/CoverAndProfilePhoto";
import RedirectShoppingList from "../components/RedirectShoppingList";

const Dashboard: FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <SafeAreaView style={{ marginTop: Platform.OS == "android" ? 30 : 0 }}>
      <CoverAndProfilePhoto />

      <RedirectShoppingList navigation={navigation} />
    </SafeAreaView>
  );
};

export default Dashboard;
