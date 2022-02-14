import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

const CustomTextField: FC<{ label: string; value: string }> = ({
  label,
  value,
}) => {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <Text style={styles.outline}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },

  outline: {
    marginTop: 4,
    padding: 8,
    borderColor: "rgb(16,120,92)",
    borderWidth: 2,
    borderRadius: 8,
  },
});

export default CustomTextField;
