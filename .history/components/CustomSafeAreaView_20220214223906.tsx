import React from "react";
import { SafeAreaView, Platform } from "react-native";

const CustomSafeAreaView = () => {
  return (
    <SafeAreaView style={{ marginTop: Platform.OS == "android" ? 35 : 0 }} />
  );
};
