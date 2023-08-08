import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { THEME } from "../util/constants";

type Prop = {
  nameIcon: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
  backgroundColor?: string;
  color?: string;
  accessibilityLabel?: string;
};

export default function CircleIcon({
  nameIcon,
  onPress,
  backgroundColor = THEME.primary,
  color = "#000",
  ...props
}: Prop) {
  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, { backgroundColor }]}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Ionicons name={nameIcon} size={20} color={color} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});
