import { useFonts } from "expo-font";
import { useCallback } from "react";
import { SafeAreaView, StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import IconButton from "../components/common/IconButton";
import * as SplashScreen from "expo-splash-screen";
import { StackNavigationProp } from "@react-navigation/stack";
import { AppParams } from "../components/navigation/FlowNavigation";

SplashScreen.preventAutoHideAsync();
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

type navigationPropTypes = StackNavigationProp<AppParams, "PlanOverview">;

const PlanOverviewScreen: React.FC<navigationPropTypes> = ({ navigation }: any) => {

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
    <SafeAreaView>
      <ScrollView style={{ paddingHorizontal: 15 }}>
        <View style={{ alignItems: "center", justifyContent: "center", paddingVertical: 15 }}>
          <IconButton
            style={{
              position: "absolute",
              left: 0,
            }}
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default PlanOverviewScreen;

const styles = StyleSheet.create({});
