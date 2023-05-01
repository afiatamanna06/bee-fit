import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import OnBoardingScreen from "./screens/OnBoardingScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <OnBoardingScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
