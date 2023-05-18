import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import IconButton from "../common/IconButton";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const WorkoutHeading = ({ workout }) => {
  return (
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
  );
};

export default WorkoutHeading;

const styles = StyleSheet.create({});
