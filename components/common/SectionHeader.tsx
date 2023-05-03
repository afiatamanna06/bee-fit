import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

interface propTypes {
    title?: string
}

const SectionHeader = ({title}: propTypes) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 18,
        marginVertical: 20,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          color: "#fff",
          fontFamily: "Poppins-Regular",
        }}
      >
        {title}
      </Text>
      <TouchableOpacity activeOpacity={0.7}>
        <Text
          style={{
            fontSize: 14,
            color: "#ADF547",
            fontFamily: "Poppins-Regular",
          }}
        >
          See all
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SectionHeader;

const styles = StyleSheet.create({});
