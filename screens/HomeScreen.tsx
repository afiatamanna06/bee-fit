import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { StackNavigationProp } from "@react-navigation/stack";
import { AppParams } from "../components/navigation/FlowNavigation";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import HomeTopBar from "../components/home/HomeTopBar";
import IconButton from "../components/common/IconButton";
import HomeSearchBar from "../components/home/HomeSearchBar";

SplashScreen.preventAutoHideAsync();
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

type navigationPropTypes = StackNavigationProp<AppParams, "Home">;

const HomeScreen: React.FC<navigationPropTypes> = ({ navigation }: any) => {
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
    <SafeAreaView
      style={{
        backgroundColor: "#000",
        flex: 1,
        width: width,
        height: height,
        paddingVertical: 30,
      }}
      onLayout={onLayoutRootView}
    >
      <ScrollView>
        <View>
          <HomeTopBar />
          <HomeSearchBar />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
