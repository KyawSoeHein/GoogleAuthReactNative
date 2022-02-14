import React, { FC } from "react";
import { SafeAreaView, Platform } from "react-native";

const CustomSafeAreaView: FC<{ childern: any }> = () => {
  return (
    <SafeAreaView style={{ marginTop: Platform.OS == "android" ? 35 : 0 }} />
  );
};
