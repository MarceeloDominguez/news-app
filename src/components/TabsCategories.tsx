import React from "react";
import { Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";

const categories = [
  { category: "business", label: "Business" },
  { category: "sports", label: "Sports" },
  { category: "technology", label: "Technology" },
  { category: "science", label: "Science" },
  { category: "health", label: "Health" },
  { category: "entertainment", label: "Entertainment" },
];

type Prop = {
  handleSelectedCategory: (category: string) => void;
  selectedCategory: string;
};

export default function TabsCategories({
  selectedCategory,
  handleSelectedCategory,
}: Prop) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {categories.map((item, index) => (
        <TouchableOpacity
          activeOpacity={1}
          key={item.label}
          onPress={() => handleSelectedCategory(item.category)}
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
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 12,
    marginTop: 5,
    marginBottom: 10,
  },
  buttonCategory: {
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
    height: 30,
    marginVertical: 10,
    borderRadius: 15,
    elevation: 5,
  },
  labelButton: {
    fontWeight: "700",
    letterSpacing: 0.3,
    fontSize: 13,
  },
});
