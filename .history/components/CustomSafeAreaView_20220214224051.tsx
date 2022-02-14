import React, { FC } from "react";
import { SafeAreaView, Platform } from "react-native";

const CustomSafeAreaView: FC<{ childern: any; props: any }> = ({
  childern,
}) => {
  return (
    <SafeAreaView style={{ marginTop: Platform.OS == "android" ? 35 : 0 }}>
      {childern}
    </SafeAreaView>
  );
};

export default CustomSafeAreaView;
