import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import CarouselCard from "../components/CarouselCard";
import { SIZE_IMAGE_CAROUSEL } from "../util/constants";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={[{ key: "left-spacer" }, ...Array(10), { key: "left-spacer" }]}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToInterval={SIZE_IMAGE_CAROUSEL.CONTAINER_ITEM_SIZE}
        contentContainerStyle={{
          backgroundColor: "red",
          height: 240,
          marginTop: 30,
          alignItems: "center",
        }}
        renderItem={({ item }) => {
          console.log(item);

          if (item) {
            return (
              <View style={{ width: SIZE_IMAGE_CAROUSEL.SPACER_ITEM_SIZE }} />
            );
          }

          return <CarouselCard />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
