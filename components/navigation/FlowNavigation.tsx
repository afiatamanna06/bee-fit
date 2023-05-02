import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen";
import OnBoardingScreen from "../../screens/OnBoardingScreen";

export type AppParams = {
    Home: undefined;
    OnBoarding: undefined;
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
    </Stack.Navigator>
  );
};

export default FlowNavigation;
