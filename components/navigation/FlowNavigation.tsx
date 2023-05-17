import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen";
import OnBoardingScreen from "../../screens/OnBoardingScreen";
import PlanOverviewScreen from "../../screens/PlanOverviewScreen";

export type AppParams = {
  Home: undefined;
  OnBoarding: undefined;
  PlanOverview: undefined;
};

const Stack = createNativeStackNavigator<AppParams>();

const FlowNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="OnBoarding"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="PlanOverview" component={PlanOverviewScreen} />
    </Stack.Navigator>
  );
};

export default FlowNavigation;
