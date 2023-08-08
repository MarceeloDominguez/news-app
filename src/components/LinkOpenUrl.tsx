import React from "react";
import { View, StyleSheet, Linking } from "react-native";
import CircleIcon from "./CircleIcon";

type Prop = {
  url: string;
};

export default function LinkOpenUrl({ url }: Prop) {
  return (
    <View style={styles.containerIconLink}>
      <CircleIcon
        nameIcon="ios-exit-outline"
        backgroundColor="#146C94"
        color="#fff"
        onPress={() => Linking.openURL(url)}
        accessibilityLabel="Abrir Link"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerIconLink: {
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
