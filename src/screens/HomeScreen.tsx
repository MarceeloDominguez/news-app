import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  ScrollView,
} from "react-native";
import { SIZE_IMAGE_CAROUSEL, THEME } from "../util/constants";
import { GlobalStyle } from "../util/stylesGlobal";
import { Article } from "../interfaces/newsInterface";
import CarouselCard from "../components/CarouselCard";
import CircleIcon from "../components/CircleIcon";
import LayoutHeader from "../components/LayoutHeader";
import CardNews from "../components/CardNews";
import TabsCategories from "../components/TabsCategories";
import Loading from "../components/Loading";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../navigation/Navigation";
import { useTopNews } from "../hooks/useTopNews";
import { useCategoryNews } from "../hooks/useCategoryNews";
import Error from "../components/Error";

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState("business");
  const { topNews, isLoading, isError } = useTopNews();
  const { newsByCategory, loading, error } = useCategoryNews(selectedCategory);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

  const handleSelectedCategory = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
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
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Error title="Ups!, algo salio mal" />
      ) : (
        <View>
          <FlatList
            data={[{ key: "left-spacer" }, ...topNews, { key: "left-spacer" }]}
            keyExtractor={(_, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            snapToInterval={SIZE_IMAGE_CAROUSEL.CONTAINER_ITEM_SIZE}
            contentContainerStyle={{
              height: 240,
              alignItems: "center",
            }}
            renderItem={({ item }: Article | any) => {
              if (!item.title) {
                return (
                  <View
                    style={{ width: SIZE_IMAGE_CAROUSEL.SPACER_ITEM_SIZE }}
                  />
                );
              }

              return <CarouselCard article={item} />;
            }}
          />
        </View>
      )}
      <View>
        <Text style={styles.titleList}>News by Category</Text>
        <TabsCategories
          handleSelectedCategory={handleSelectedCategory}
          selectedCategory={selectedCategory}
        />
        {loading ? (
          <Loading />
        ) : error ? (
          <Error title="Ups!, algo salio mal" />
        ) : (
          <View style={{ marginBottom: 40 }}>
            {newsByCategory.map((item, index) => (
              <CardNews key={index} article={item} />
            ))}
          </View>
        )}
      </View>
    </ScrollView>
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
    fontWeight: "bold",
    marginVertical: 5,
  },
  titleList: {
    paddingHorizontal: 22,
    marginTop: 12,
    fontSize: 20,
    fontWeight: "bold",
  },
});
