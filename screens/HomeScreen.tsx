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
import { workoutPlans, workouts } from "../data";
import Workout from "../components/home/Workout";
import { Rating, AirbnbRating } from "react-native-ratings";

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

  function ratingCompleted(rating) {
    console.log("Rating is: " + rating);
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
            decelerationRate="fast"
            pagingEnabled
            snapToInterval={290}
            style={{ marginHorizontal: 15 }}
          >
            {workouts.map((workout) => (
              <Workout
                onPress={() => navigation.navigate("PlanOverview")}
                workout={workout}
                key={workout.id}
              />
            ))}
          </ScrollView>
          <SectionHeader title="Trending Plans" />
          <View style={{ marginHorizontal: 15 }}>
            {workoutPlans.map((plan) => (
              <TouchableOpacity
                key={plan.id}
                activeOpacity={0.7}
                style={{
                  padding: 5,
                  marginBottom: 15,
                  backgroundColor: "#1F212C",
                  borderRadius: 8,
                  flexDirection: "row",
                }}
              >
                <Image
                  source={plan.image}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 8,
                    marginRight: 10,
                  }}
                />
                <View>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#fff",
                      fontFamily: "Poppins-SemiBold",
                    }}
                  >
                    {plan.name}
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Ionicons
                      name="calendar-outline"
                      color={"#fff"}
                      size={16}
                    />
                    <Text
                      style={{
                        fontSize: 16,
                        color: "#fff",
                        fontFamily: "Poppins-Regular",
                        marginTop: 3,
                        marginLeft: 5,
                      }}
                    >
                      {plan.duration} | {plan.location}
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                      {[...Array(plan.rating)].map((idx) => (
                        <Ionicons
                          name="star"
                          key={idx}
                          color={"#F2E205"}
                          size={16}
                        />
                      ))}
                    </View>
                    <Text
                      style={{
                        fontSize: 16,
                        color: "#fff",
                        fontFamily: "Poppins-Regular",
                        marginTop: 3,
                        marginLeft: 5,
                      }}
                    >
                      {plan.rating}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
