import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import React, { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { StackNavigationProp } from "@react-navigation/stack";
import { AppParams } from "../components/navigation/FlowNavigation";
import { useFonts } from "expo-font";
import HomeTopBar from "../components/home/HomeTopBar";
import HomeSearchBar from "../components/home/HomeSearchBar";
import CategoryList from "../components/home/CategoryList";
import SectionHeader from "../components/common/SectionHeader";
import { workouts } from "../data";
import Workout from "../components/home/Workout";
import WorkoutPlan from "../components/home/WorkoutPlan";

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
          <WorkoutPlan />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
