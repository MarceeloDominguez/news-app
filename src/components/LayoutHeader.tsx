import React from "react";
import { View, StyleSheet } from "react-native";

type Prop = {
  children: React.ReactNode;
};

export default function LayoutHeader({ children }: Prop) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 22,
    marginBottom: 12,
    marginTop: 15,
    alignItems: "center",
  },
});
