import React, { FC } from "react";
import { Text, View } from "react-native";

const CustomTextField: FC<{ label: string; value: string }> = ({
  label,
  value,
}) => {
  return (
    <View>
      <Text>{label}</Text>
    </View>
  );
};

export default CustomTextField;
