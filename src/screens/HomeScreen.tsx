import React from "react";
import { View, Text, StyleSheet, FlatList, StatusBar } from "react-native";
import { SIZE_IMAGE_CAROUSEL, THEME } from "../util/constants";
import { GlobalStyle } from "../util/stylesGlobal";
import CarouselCard from "../components/CarouselCard";
import CircleIcon from "../components/CircleIcon";
import LayoutHeader from "../components/LayoutHeader";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../navigation/Navigation";

export default function HomeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={THEME.primary} />
      <LayoutHeader>
        <View style={GlobalStyle.wrapIcon}>
          <CircleIcon nameIcon="menu" />
        </View>
        <View style={GlobalStyle.wrapIcon}>
          <CircleIcon
            nameIcon="search"
            onPress={() => navigation.navigate("SearchScreen")}
          />
          <CircleIcon nameIcon="notifications-outline" />
        </View>
      </LayoutHeader>
      <Text style={styles.title}>Breaking News</Text>
      <FlatList
        data={[{ key: "left-spacer" }, ...Array(10), { key: "left-spacer" }]}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToInterval={SIZE_IMAGE_CAROUSEL.CONTAINER_ITEM_SIZE}
        contentContainerStyle={{
          height: 240,
          alignItems: "center",
        }}
        renderItem={({ item }) => {
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
    backgroundColor: THEME.primary,
  },
  title: {
    paddingHorizontal: 22,
    fontSize: 20,
    fontWeight: "600",
    marginVertical: 5,
  },
});
