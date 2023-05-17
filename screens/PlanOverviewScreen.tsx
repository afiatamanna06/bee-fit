import { useFonts } from "expo-font";
import { useCallback } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import IconButton from "../components/common/IconButton";
import { Ionicons } from "@expo/vector-icons";
import * as SplashScreen from "expo-splash-screen";
import { StackNavigationProp } from "@react-navigation/stack";
import { AppParams } from "../components/navigation/FlowNavigation";

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

  const workout = route.params.workout;

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#000",
        flex: 1,
        width: width,
        height: height,
        paddingVertical: 30,
      }}
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
        <View
          style={{
            width: width,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            position: "relative",
            height: 200,
          }}
        >
          <Image
            source={workout.image}
            style={{
              width: width / 1.1,
              height: 200,
              borderRadius: 8,
              position: "absolute",
            }}
          />
          <View
            style={{
              position: "absolute",
              zIndex: 2,
              right: 15,
              top: 0,
              padding: 8,
            }}
          >
            <IconButton
              name="bookmark-outline"
              borderWidth={0}
              background="rgba(0, 0, 0, .5)"
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: width / 1.16,
              paddingHorizontal: 15,
              paddingVertical: 6,
              borderRadius: 4,
              backgroundColor: "rgba(0, 0, 0, .5)",
              marginBottom: 10,
              zIndex: 2,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 16,
                  color: "#ADF547",
                  fontFamily: "Poppins-SemiBold",
                  marginRight: 4,
                }}
              >
                {workout.minutes}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: "#fff",
                  fontFamily: "Poppins-Regular",
                }}
              >
                minutes
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 16,
                  color: "#ADF547",
                  fontFamily: "Poppins-SemiBold",
                  marginRight: 4,
                }}
              >
                {workout.calories}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: "#fff",
                  fontFamily: "Poppins-Regular",
                }}
              >
                calories
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 16,
                  color: "#ADF547",
                  fontFamily: "Poppins-SemiBold",
                  marginRight: 4,
                }}
              >
                {workout.exercises.length}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: "#fff",
                  fontFamily: "Poppins-Regular",
                }}
              >
                exercises
              </Text>
            </View>
          </View>
        </View>
        <View style={{ paddingVertical: 15, marginHorizontal: 15 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 1,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "#fff",
                fontFamily: "Poppins-SemiBold",
              }}
            >
              {workout.name}
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
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
              fontSize: 14,
              color: "#fff",
              fontFamily: "Poppins-Regular",
            }}
          >
            {workout.coach}
          </Text>
          <Text
            style={{
              fontSize: 17,
              color: "#fff",
              fontFamily: "Poppins-SemiBold",
              marginTop: 10,
            }}
          >
            Description
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "#fff",
              fontFamily: "Poppins-Regular",
            }}
          >
            {workout.description}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PlanOverviewScreen;

const styles = StyleSheet.create({});
