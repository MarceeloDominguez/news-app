import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { SIZE_IMAGE_CAROUSEL, THEME } from "../util/constants";
import LayoutHeader from "../components/LayoutHeader";
import CircleIcon from "../components/CircleIcon";
import { GlobalStyle } from "../util/stylesGlobal";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../navigation/Navigation";
import { EvilIcons } from "@expo/vector-icons";

export default function DetailsScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <LayoutHeader>
          <View style={GlobalStyle.wrapIcon}>
            <CircleIcon
              nameIcon="ios-arrow-back-outline"
              onPress={() => navigation.goBack()}
            />
          </View>
          <View style={GlobalStyle.wrapIcon}>
            <CircleIcon nameIcon="share-outline" />
            <CircleIcon nameIcon="bookmark-outline" />
          </View>
        </LayoutHeader>
        <View style={styles.contentInfo}>
          <Text style={styles.portal}>The Washington Post - 28/6/2023</Text>
          <Text style={styles.title}>
            Ukraine strikes Russian ports in Novorossiysk and occupied Crimea -
            The Washington Post - The Washington Post
          </Text>
          <Image
            source={{
              uri: "https://s.yimg.com/ny/api/res/1.2/02Zb8Wu4xtDfqcpEdaoDqg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/bloomberg_markets_842/af1be289d4eef43f85063d45e69c6598",
            }}
            style={styles.image}
          />
          <Text style={styles.author} numberOfLines={2}>
            Isabelle Khurshudyan, David L. Stern
          </Text>
          <Text style={styles.description}>
            The strike on Novorossiysk, a port on the Black Sea about 90 miles
            west of the city of Krasnodar, demonstrated Ukraine's success in
            hitting targets in Russian territory. The strike on Novorossiysk, a
            port on the Black Sea about 90 miles west of the city of Krasnodar,
            demonstrated Ukraine's success in hitting targets in Russian hitting
            targets in Russian territory. The strike on Novorossiysk, a port on
            the Black Sea about 90 miles west of the city of Krasnodar,
            demonstrated Ukraine's success in hitting targets in Russian
          </Text>
        </View>
      </ScrollView>
      <View style={styles.buttonFloating}>
        <View style={styles.wrapIconNumber}>
          <CircleIcon nameIcon="heart-outline" />
          <Text style={styles.numberButtonFloating}>6.7k</Text>
        </View>
        <View style={styles.wrapIconNumber}>
          <CircleIcon nameIcon="ios-chatbox-ellipses-outline" />
          <Text style={styles.numberButtonFloating}>12k</Text>
        </View>
        <View style={styles.containerIconLink}>
          <EvilIcons name="external-link" size={26} color="#fff" />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.primary,
  },
  contentInfo: {
    paddingHorizontal: 22,
    marginTop: 10,
  },
  title: {
    fontSize: 25,
    lineHeight: 32,
    fontWeight: "600",
    letterSpacing: 0.4,
    marginBottom: 5,
  },
  portal: {
    marginBottom: 12,
    color: "#333",
    fontWeight: "400",
  },
  image: {
    width: SIZE_IMAGE_CAROUSEL.IMAGE_SIZE,
    height: 220,
    borderRadius: 14,
    marginVertical: 10,
  },
  author: {
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    maxWidth: 300,
    alignSelf: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    letterSpacing: 0.4,
    lineHeight: 22,
    color: "#333",
    marginBottom: 100,
    marginTop: 20,
  },
  buttonFloating: {
    backgroundColor: "#fff",
    width: "60%",
    alignSelf: "center",
    height: 50,
    borderRadius: 25,
    position: "absolute",
    bottom: 20,
    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
    justifyContent: "space-between",
  },
  wrapIconNumber: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  containerIconLink: {
    backgroundColor: "#146C94",
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  numberButtonFloating: {
    fontWeight: "bold",
  },
});
