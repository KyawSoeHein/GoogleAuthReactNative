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
import CustomSafeAreaView from "../components/CustomSafeAreaView";

const Dashboard: FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <CustomSafeAreaView
      style={{ marginTop: Platform.OS == "android" ? 35 : 0 }}
    >
      <CoverAndProfilePhoto />

      <RedirectShoppingList navigation={navigation} />
    </CustomSafeAreaView>
  );
};

export default Dashboard;
