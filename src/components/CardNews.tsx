import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../navigation/Navigation";
import { Article } from "../interfaces/newsInterface";
import { formatDate } from "../helpers/formatDate";

type Prop = {
  article: Article;
};

export default function CardNews({ article }: Prop) {
  const { title, author, urlToImage, publishedAt } = article;

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
      onPress={() => navigation.navigate("DetailsScreen", article)}
    >
      {urlToImage ? (
        <Image source={{ uri: urlToImage }} style={styles.image} />
      ) : (
        <Image
          source={{
            uri: "https://s.yimg.com/ny/api/res/1.2/02Zb8Wu4xtDfqcpEdaoDqg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/bloomberg_markets_842/af1be289d4eef43f85063d45e69c6598",
          }}
          style={styles.image}
        />
      )}

      <View style={styles.wrapInfoCard}>
        <Text style={styles.author} numberOfLines={1}>
          {author}
        </Text>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.date}>{formatDate(new Date(publishedAt))}</Text>
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
