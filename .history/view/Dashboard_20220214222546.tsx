import React, { FC } from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import CoverAndProfilePhoto from "../components/CoverAndProfilePhoto";
import RedirectShoppingList from "../components/RedirectShoppingList";
import { NavigationScreenProp } from 'react-navigation';

const Dashboard :FC <{navigation : }>= ({navigation}) => {
  return (
    <SafeAreaView>
      <CoverAndProfilePhoto />

      <RedirectShoppingList />
    </SafeAreaView>
  );
};

export default Dashboard;
