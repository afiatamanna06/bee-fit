import { StyleSheet, TouchableOpacity, Text } from "react-native";
import React, { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

interface propTypes {
  title: string;
  onPress?: any;
  textColor?: string;
  backgroundColor?: string;
  width?: any;
}

const CommonButton = ({
  title,
  onPress,
  textColor,
  backgroundColor,
  width,
}: propTypes) => {
  let [fontsLoaded] = useFonts({
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <TouchableOpacity
      style={{
        backgroundColor: backgroundColor,
        width: width,
        borderRadius: 5,
        paddingVertical: 8,
      }}
      onPress={onPress}
      activeOpacity={0.9}
      onLayout={onLayoutRootView}
    >
      <Text
        style={{
          fontSize: 16,
          fontFamily: "Poppins-Regular",
          color: textColor,
          textAlign: "center",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CommonButton;

const styles = StyleSheet.create({});
