import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const HomeTopBar = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 18,
      }}
    >
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Image
          source={require("../../assets/images/avatar.png")}
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            marginRight: 10,
          }}
        />
        <View style={{ display: "flex", flexDirection: "column" }}>
          <Text
            style={{
              fontSize: 16,
              color: "#fff",
              fontFamily: "Poppins-Regular",
            }}
          >
            Hello, Welcome
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: "#fff",
              fontFamily: "Poppins-SemiBold",
            }}
          >
            User
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          height: 40,
          width: 40,
          borderWidth: 1,
          borderColor: "#504f4f",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
        }}
      >
        <Ionicons name="notifications" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default HomeTopBar;

const styles = StyleSheet.create({});
