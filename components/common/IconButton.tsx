import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

interface PropTypes {
  style?: any;
  size?: number;
  color?: string;
  name: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
  borderWidth?: number;
  background?: string;
}

const IconButton = ({ name, color = "#fff", size = 24, style, onPress, borderWidth = 1, background }: PropTypes) => {
  return (
    <TouchableOpacity
      style={[{
        height: 40,
        width: 40,
        borderWidth: borderWidth,
        borderColor: "#504f4f",
        alignItems: "center",
        backgroundColor: background,
        justifyContent: "center",
        borderRadius: 10,
      }, style]}
      activeOpacity={0.9}
      onPress={onPress}
    >
      <Ionicons name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({});
