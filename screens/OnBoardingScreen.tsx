import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const OnBoardingScreen = () => {
  return (
    <View style={{ flex: 1, width: width, height: height }}>
      <Image
        source={require("../assets/images/onboarding.jpeg")}
        style={{ width: width, height: height, resizeMode: "cover", flex: 1 }}
      />
    </View>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({});
