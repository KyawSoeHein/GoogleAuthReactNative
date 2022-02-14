import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

const CustomTextField: FC<{ label: string; value: string }> = ({
  label,
  value,
}) => {
  return (
    <View>
      <Text>{label}</Text>
      <Text>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  outline: {
    height: 70,
    borderColor: "green",
    borderWidth: 2,
    borderRadius: 8,
  },
});

export default CustomTextField;
