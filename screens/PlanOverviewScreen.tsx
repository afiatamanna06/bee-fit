import { useFonts } from "expo-font";
import { useCallback } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
} from "react-native";
import IconButton from "../components/common/IconButton";
import * as SplashScreen from "expo-splash-screen";
import { StackNavigationProp } from "@react-navigation/stack";
import { AppParams } from "../components/navigation/FlowNavigation";
import { LinearGradient } from "expo-linear-gradient";
import CommonButton from "../components/common/CommonButton";
import WorkoutExercises from "../components/plan-overview/WorkoutExercises";
import WorkoutIntro from "../components/plan-overview/WorkoutIntro";
import WorkoutHeading from "../components/plan-overview/WorkoutHeading";
import { Workout } from "../data";

SplashScreen.preventAutoHideAsync();
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

type navigationPropTypes = StackNavigationProp<AppParams, "PlanOverview">;

const PlanOverviewScreen: React.FC<navigationPropTypes> = ({
  navigation,
  route,
}: any) => {
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

  const workout: Workout = route.params.workout;

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
      <ScrollView style={{}}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 15,
            marginHorizontal: 15,
          }}
        >
          <IconButton
            style={{
              position: "absolute",
              left: 0,
            }}
            onPress={() => navigation.goBack()}
            name="chevron-back"
          />
          <Text
            style={{
              fontSize: 16,
              color: "#fff",
              fontFamily: "Poppins-Regular",
            }}
          >
            Plan Overview
          </Text>
        </View>
        <WorkoutHeading workout={workout} />
        <View style={{ paddingVertical: 15, marginHorizontal: 15 }}>
          <WorkoutIntro workout={workout} />
          <WorkoutExercises workout={workout} />
        </View>
      </ScrollView>
      <LinearGradient
        style={{
          position: "absolute",
          width: width,
          bottom: 0,
          paddingVertical: 15,
        }}
        colors={["rgba(0, 0, 0, .1)", "rgba(0, 0, 0, 1)"]}
      >
        <View
          style={{
            width: width,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CommonButton
            title="Start Workout"
            backgroundColor="#ADF547"
            width={width / 1.2}
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default PlanOverviewScreen;

const styles = StyleSheet.create({});
