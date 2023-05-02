import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

interface PropTypes {
  style?: any;
  size?: number;
  color?: string;
  name: keyof typeof Ionicons.glyphMap;
}

const IconButton = ({ name, color = "#fff", size = 24, style }: PropTypes) => {
  return (
    <TouchableOpacity
      style={[{
        height: 40,
        width: 40,
        borderWidth: 1,
        borderColor: "#504f4f",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
      }, style]}
      activeOpacity={0.9}
    >
      <Ionicons name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({});
