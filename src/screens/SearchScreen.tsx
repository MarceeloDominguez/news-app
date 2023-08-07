import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { THEME } from "../util/constants";
import { useSearch } from "../hooks/useSearch";
import CardNews from "../components/CardNews";
import Loading from "../components/Loading";
import LayoutHeader from "../components/LayoutHeader";
import CircleIcon from "../components/CircleIcon";
import { useNavigation } from "@react-navigation/native";
import Error from "../components/Error";

export default function SearchScreen() {
  const [textValue, setTextValue] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState(false);
  const language = selectedLanguage ? "es" : "en";
  const { news, searchNews, loading, error } = useSearch(textValue, language);
  const navigation = useNavigation();

  const newsOrder = news?.sort((a, b) => {
    const dateA = new Date(a.publishedAt);
    const dateB = new Date(b.publishedAt);

    return dateB.getTime() - dateA.getTime();
  });

  return (
    <View style={styles.container}>
      <LayoutHeader>
        <CircleIcon
          nameIcon="ios-arrow-back-outline"
          onPress={() => navigation.goBack()}
          backgroundColor="#fff"
        />
      </LayoutHeader>
      <View style={styles.containerInput}>
        <TextInput
          placeholder="Search news..."
          style={styles.input}
          onChangeText={(value) => setTextValue(value)}
        />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => searchNews()}
        >
          <Ionicons name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {news && (
        <TouchableOpacity
          style={styles.buttonLanguage}
          onPress={() => setSelectedLanguage(!selectedLanguage)}
        >
          <Text style={styles.titleButtonLanguage}>
            {!selectedLanguage ? "Noticias en ES" : "News in EN"}
          </Text>
        </TouchableOpacity>
      )}

      {loading ? (
        <Loading />
      ) : error ? (
        <Error title="Ups!, algo salio mal" />
      ) : (
        <FlatList
          data={newsOrder}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={{ paddingBottom: 20 }}
          renderItem={({ item }) => <CardNews article={item} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.primary,
  },
  containerInput: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 5,
    marginHorizontal: 22,
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#fff",
    height: 50,
    borderRadius: 5,
    paddingHorizontal: 15,
    flex: 1,
  },
  button: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  buttonLanguage: {
    backgroundColor: "#146C94",
    marginHorizontal: 22,
    alignSelf: "flex-end",
    paddingHorizontal: 15,
    height: 30,
    justifyContent: "center",
    borderRadius: 15,
    elevation: 5,
    marginVertical: 15,
  },
  titleButtonLanguage: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "700",
  },
});
