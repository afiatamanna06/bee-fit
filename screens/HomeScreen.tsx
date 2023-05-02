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
          <View
            style={{
              backgroundColor: "#1F212C",
              paddingVertical: 10,
              paddingHorizontal: 15,
              borderRadius: 10,
              marginVertical: 20,
              marginHorizontal: 15,
              flexDirection: "row",
            }}
          >
            <Ionicons name="search-outline" size={24} color="#fff" />
            <TextInput
              placeholder="Search Workouts.."
              placeholderTextColor="#fff"
              style={{
                marginLeft: 10,
                fontSize: 14,
                width: width,
                fontFamily: "Poppins-Regular",
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
