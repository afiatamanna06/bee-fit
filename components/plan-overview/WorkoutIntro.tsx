import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const WorkoutIntro = ({ workout }) => {
  return (
    <>
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
    </>
  );
};

export default WorkoutIntro;

const styles = StyleSheet.create({});
