import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Prop = {
  title: string;
};

export default function Error({ title }: Prop) {
  return (
    <View style={styles.container}>
      <Text style={styles.error}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    height: 150,
    justifyContent: "center",
  },
  error: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
