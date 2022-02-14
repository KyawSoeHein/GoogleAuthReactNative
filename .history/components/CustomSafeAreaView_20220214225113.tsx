import React, { FC } from "react";
import { SafeAreaView, Platform } from "react-native";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const CustomSafeAreaView: FC<Props> = ({ children }) => {
  return (
    <SafeAreaView
      style={{
        marginTop: Platform.OS == "android" ? 35 : 0,
      }}
    >
      {children}
    </SafeAreaView>
  );
};

export default CustomSafeAreaView;
