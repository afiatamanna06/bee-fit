import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import IconButton from "../common/IconButton";

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
      <IconButton name="notifications" />
    </View>
  );
};

export default HomeTopBar;

const styles = StyleSheet.create({});
