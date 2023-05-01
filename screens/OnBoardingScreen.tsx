import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { useFonts } from "expo-font";
import React, { useCallback } from "react";
import { LinearGradient } from "expo-linear-gradient";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const OnBoardingScreen = () => {

  let [fontsLoaded] = useFonts({
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
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
    <View style={{ flex: 1, width: width, height: height }} onLayout={onLayoutRootView}>
      <Image
        source={require("../assets/images/onboarding.jpeg")}
        style={{ width: width, height: height, resizeMode: "cover", flex: 1 }}
      />
      <View style={{ position: "absolute", bottom: 0 }}>
        <LinearGradient
          colors={[`rgba(0, 0, 0, 0)`, `#000`]}
          style={{ position: "relative", width: width, height: height / 2.3, paddingHorizontal: 19 }}
        >
          <Text
            style={{
              color: "#fff",
              position: "relative",
              textTransform: "capitalize",
              fontSize: 32,
              fontWeight: "600",
              fontFamily: "Poppins-SemiBold",
              textAlign: "center",
            }}
          >
            Stay healthy even if you stay at home
          </Text>
          <Text
          style={{
            fontSize: 16,
            color: "#fff",
            fontFamily: "Poppins-Regular",
            textAlign: "center",
            marginTop: 10,
            marginBottom: 20,
          }}
        >
          Staying fit to keep you in good condition can now go through mobile
          apps.
        </Text>
        </LinearGradient>
      </View>
    </View>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({});
