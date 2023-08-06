import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SIZE_IMAGE_CAROUSEL, THEME } from "../util/constants";
import { GlobalStyle } from "../util/stylesGlobal";
import CarouselCard from "../components/CarouselCard";
import CircleIcon from "../components/CircleIcon";
import LayoutHeader from "../components/LayoutHeader";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../navigation/Navigation";
import CardNews from "../components/CardNews";

const categories = [
  { category: "general", label: "All" },
  { category: "business", label: "Business" },
  { category: "sports", label: "Sports" },
  { category: "technology", label: "Technology" },
  { category: "science", label: "Science" },
  { category: "health", label: "Health" },
  { category: "entertainment", label: "Entertainment" },
];

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState("general");

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

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
      <View>
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
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            paddingLeft: 12,
            marginTop: 10,
          }}
        >
          {categories.map((item, index) => (
            <TouchableOpacity
              activeOpacity={1}
              key={item.label}
              onPress={() => setSelectedCategory(item.category)}
              style={[
                styles.buttonCategory,
                {
                  marginRight: index === categories.length - 1 ? 28 : 0,
                  backgroundColor:
                    item.category === selectedCategory ? "#146C94" : "#fff",
                },
              ]}
            >
              <Text
                style={[
                  styles.labelButton,
                  {
                    color: item.category === selectedCategory ? "#fff" : "#333",
                  },
                ]}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <Text style={styles.titleList}>Recommended for you</Text>
        <View style={{ marginBottom: 40 }}>
          {[...Array(5)].map((item, index) => (
            <CardNews key={index} />
          ))}
        </View>
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
  buttonCategory: {
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
    height: 40,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 5,
  },
  labelButton: {
    fontWeight: "700",
    letterSpacing: 0.3,
  },
  titleList: {
    paddingHorizontal: 22,
    marginTop: 12,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
