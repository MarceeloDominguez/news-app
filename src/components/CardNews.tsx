import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../navigation/Navigation";

export default function CardNews() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
      onPress={() => navigation.navigate("DetailsScreen")}
    >
      <Image
        source={{
          uri: "https://s.yimg.com/ny/api/res/1.2/02Zb8Wu4xtDfqcpEdaoDqg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/bloomberg_markets_842/af1be289d4eef43f85063d45e69c6598",
        }}
        style={styles.image}
      />
      <View style={styles.wrapInfoCard}>
        <Text style={styles.author} numberOfLines={1}>
          Isabelle Khurshudyan, David L. Stern Isabelle Khurshudyan, David L.
          Stern
        </Text>
        <Text style={styles.title} numberOfLines={2}>
          The strike on Novorossiysk, a port on the Black Sea about 90 miles
          west of the city of Krasnodar, demonstrated Ukraine's success in
          hitting targets in Russian territory. The strike on Novorossiysk, a
          port on the Black Sea about 90 miles west of the city of Krasnodar,
        </Text>
        <Text style={styles.date}>6/8/2023</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 22,
    marginVertical: 5,
    flexDirection: "row",
    gap: 10,
  },
  image: {
    height: 110,
    width: 110,
    borderRadius: 14,
  },
  author: {
    fontSize: 13,
    fontWeight: "400",
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 20,
  },
  date: {
    fontSize: 12,
    color: "#333",
  },
  wrapInfoCard: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 5,
  },
});
