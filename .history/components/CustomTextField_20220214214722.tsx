import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

const CustomTextField: FC<{ label: string; value: string }> = ({
  label,
  value,
}) => {
  return (
    <View>
      <Text>{label}</Text>
      <Text style={styles.outline}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  outline: {
    marginTop: 4,
    padding: 8,
    borderColor: "green",
    borderWidth: 2,
    borderRadius: 8,
  },
});

export default CustomTextField;