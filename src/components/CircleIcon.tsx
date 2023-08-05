import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { THEME } from "../util/constants";

type Prop = {
  nameIcon: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
  //route: keyof RootStackParamsList;
};

export default function CircleIcon({ nameIcon, onPress }: Prop) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Ionicons name={nameIcon} size={20} color="#000" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    backgroundColor: THEME.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});
