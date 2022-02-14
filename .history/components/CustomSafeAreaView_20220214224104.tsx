import React, { FC } from "react";
import { SafeAreaView, Platform } from "react-native";

const CustomSafeAreaView: FC<{ childern: any; props: any }> = ({
  childern,
  props,
}) => {
  return (
    <SafeAreaView
      style={{ marginTop: Platform.OS == "android" ? 35 : 0 }}
      {...props}
    >
      {childern}
    </SafeAreaView>
  );
};

export default CustomSafeAreaView;
