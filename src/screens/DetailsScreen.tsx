import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { THEME } from "../util/constants";
import LayoutHeader from "../components/LayoutHeader";
import CircleIconHeader from "../components/CircleIconHeader";
import { GlobalStyle } from "../util/stylesGlobal";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../navigation/Navigation";

export default function DetailsScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

  return (
    <View style={styles.container}>
      <LayoutHeader>
        <View style={GlobalStyle.wrapIcon}>
          <CircleIconHeader
            nameIcon="ios-arrow-back-outline"
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={GlobalStyle.wrapIcon}>
          <CircleIconHeader nameIcon="share-outline" />
          <CircleIconHeader nameIcon="bookmark-outline" />
        </View>
      </LayoutHeader>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.primary,
  },
});
