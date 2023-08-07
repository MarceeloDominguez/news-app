import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SIZE_IMAGE_CAROUSEL } from "../util/constants";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../navigation/Navigation";
import { Article } from "../interfaces/newsInterface";

type Prop = {
  article: Article;
};

export default function CarouselCard({ article }: Prop) {
  const { urlToImage, title } = article;

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("DetailsScreen", article)}
      activeOpacity={1}
    >
      {urlToImage ? (
        <Image style={styles.image} source={{ uri: urlToImage }} />
      ) : (
        <Image
          style={styles.image}
          source={{
            uri: "https://s.yimg.com/ny/api/res/1.2/02Zb8Wu4xtDfqcpEdaoDqg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/bloomberg_markets_842/af1be289d4eef43f85063d45e69c6598",
          }}
        />
      )}
      <Text style={styles.title} numberOfLines={3}>
        {title}
      </Text>
      <LinearGradient
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["transparent", "rgba(0,0,0,0.6)"]}
        style={styles.viewTransparentCard}
      />
      <View style={styles.tagCard}>
        <Text style={styles.titleTag}>🌍 World</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: SIZE_IMAGE_CAROUSEL.CONTAINER_ITEM_SIZE,
  },
  image: {
    width: SIZE_IMAGE_CAROUSEL.IMAGE_SIZE,
    height: 220,
    borderRadius: 14,
    alignSelf: "center",
  },
  title: {
    position: "absolute",
    alignSelf: "center",
    bottom: 10,
    color: "#fff",
    zIndex: 2,
    fontSize: 13,
    paddingHorizontal: 15,
    lineHeight: 18,
    fontWeight: "bold",
    letterSpacing: 0.4,
  },
  viewTransparentCard: {
    height: 220,
    width: SIZE_IMAGE_CAROUSEL.IMAGE_SIZE,
    position: "absolute",
    alignSelf: "center",
    borderRadius: 10,
  },
  tagCard: {
    backgroundColor: "#fff",
    position: "absolute",
    right: 20,
    top: 10,
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 100,
  },
  titleTag: {
    fontSize: 13,
    fontWeight: "600",
  },
});
