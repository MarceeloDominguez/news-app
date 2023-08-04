import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { SIZE_IMAGE_CAROUSEL } from "../util/constants";

export default function CarouselCard() {
  return (
    <View
      style={{
        width: SIZE_IMAGE_CAROUSEL.CONTAINER_ITEM_SIZE,
      }}
    >
      <Image
        style={styles.image}
        source={{
          uri: "https://sportshub.cbsistatic.com/i/r/2023/08/03/f945b44f-5cd8-4ca7-a44b-6d88669c8b43/thumbnail/1200x675/fe40643132c4443c7459b47456fed08b/big-ten-helmet.jpg",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: SIZE_IMAGE_CAROUSEL.IMAGE_SIZE,
    height: 220,
    borderRadius: 6,
    alignSelf: "center",
  },
});
