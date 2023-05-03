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
import React, { useCallback, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { StackNavigationProp } from "@react-navigation/stack";
import { AppParams } from "../components/navigation/FlowNavigation";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import HomeTopBar from "../components/home/HomeTopBar";
import IconButton from "../components/common/IconButton";
import HomeSearchBar from "../components/home/HomeSearchBar";
import { categories } from "../data";

SplashScreen.preventAutoHideAsync();
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

type navigationPropTypes = StackNavigationProp<AppParams, "Home">;

const HomeScreen: React.FC<navigationPropTypes> = ({ navigation }: any) => {
  const [active, setActive] = useState<number>(0)
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
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginHorizontal: 15, }}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                onPress={() => setActive(category.id)}
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 5,
                  backgroundColor: active === category.id ? "#ADF547" : "#1F212C",
                  marginRight: 10,
                  borderRadius: 8,
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    color: active === category.id ? "#000" : "#fff",
                    fontFamily: "Poppins-Regular",
                  }}
                >
                  {category.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
