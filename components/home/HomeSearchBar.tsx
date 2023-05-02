import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import IconButton from "../common/IconButton";

const HomeSearchBar = () => {
  return (
    <View
      style={{
        backgroundColor: "#1F212C",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        marginVertical: 20,
        marginHorizontal: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Ionicons name="search-outline" size={24} color="#fff" />
      <TextInput
        placeholder="Search Workouts.."
        placeholderTextColor="#fff"
        style={{
          marginLeft: 10,
          fontSize: 14,
          width: "75%",
          fontFamily: "Poppins-Regular",
        }}
      />
      <IconButton
        name="options-outline"
        style={{ backgroundColor: "#ADF547", color: "#000" }}
      />
    </View>
  );
};

export default HomeSearchBar;

const styles = StyleSheet.create({});
