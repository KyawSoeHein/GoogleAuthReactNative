import React, { FC } from "react";
import { SafeAreaView, Platform } from "react-native";

type Props = {
  children: JSX.Element;
};

const CustomSafeAreaView: FC<Props> = ({ childern }) => {
  return (
    <SafeAreaView style={{ marginTop: Platform.OS == "android" ? 35 : 0 }}>
      {childern}
    </SafeAreaView>
  );
};

export default CustomSafeAreaView;
