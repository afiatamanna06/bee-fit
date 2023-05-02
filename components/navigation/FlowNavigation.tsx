import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoardingScreen from "../../screens/OnBoardingScreen";

const Stack = createNativeStackNavigator();

const FlowNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="OnBoarding Screen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="OnBoarding Screen" component={OnBoardingScreen} />
    </Stack.Navigator>
  );
};

export default FlowNavigation;
