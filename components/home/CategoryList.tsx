import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { categories } from "../../data";

const CategoryList = () => {
  const [active, setActive] = useState<number>(0);
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ marginHorizontal: 15 }}
    >
      {categories.map((category) => (
        <TouchableOpacity
          key={category.id}
          onPress={() => setActive(category.id)}
          style={{
            paddingHorizontal: 15,
            paddingVertical: 5,
            backgroundColor: active === category.id ? "#ADF547" : "#1F212C",
            marginRight: 10,
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: active === category.id ? "#000" : "#fff",
              fontFamily: "Poppins-Regular",
            }}
          >
            {category.name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default CategoryList;

const styles = StyleSheet.create({});
