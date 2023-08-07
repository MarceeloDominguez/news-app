import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={40} color="#146C94" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
});
