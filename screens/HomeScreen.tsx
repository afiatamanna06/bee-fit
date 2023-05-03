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
import CategoryList from "../components/home/CategoryList";
import SectionHeader from "../components/common/SectionHeader";
import { workouts } from "../data";

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
          <CategoryList />
          <SectionHeader title="Featured Workouts" />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            decelerationRate='fast'
            pagingEnabled
            snapToInterval={290}
            style={{ marginHorizontal: 15 }}
          >
            {workouts.map((workout) => (
              <TouchableOpacity
                key={workout.id}
                style={{
                  backgroundColor: "#1F212C",
                  marginRight: 20,
                  borderRadius: 8,
                  overflow: "hidden",
                }}
              >
                <Image
                  source={workout.image}
                  style={{
                    width: 270,
                    height: 200,
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                  }}
                />
                <View style={{ padding: 10 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 10,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        color: "#fff",
                        fontFamily: "Poppins-SemiBold",
                      }}
                    >
                      {workout.name}
                    </Text>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Ionicons name="star" color={"#F2E205"} size={20} />
                      <Text
                        style={{
                          fontSize: 16,
                          color: "#fff",
                          fontFamily: "Poppins-Regular",
                          marginTop: 3,
                          marginLeft: 5,
                        }}
                      >
                        {workout.rating}
                      </Text>
                    </View>
                  </View>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#fff",
                      fontFamily: "Poppins-Regular",
                    }}
                  >
                    {workout.coach}
                  </Text>
                </View>
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
