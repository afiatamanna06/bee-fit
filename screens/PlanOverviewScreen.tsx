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
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={workout.image}
            style={{
              width: width / 1.1,
              height: 200,
              borderRadius: 8,
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PlanOverviewScreen;

const styles = StyleSheet.create({});
