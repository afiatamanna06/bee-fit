import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const WorkoutExercises = ({ workout }) => {
  return (
    <>
      <Text
        style={{
          fontSize: 17,
          color: "#fff",
          fontFamily: "Poppins-SemiBold",
          marginTop: 10,
          marginBottom: 8,
        }}
      >
        Exercises ({workout.exercises.length})
      </Text>
      {workout.exercises.map((exercise: any) => (
        <TouchableOpacity
          key={exercise.id}
          activeOpacity={0.7}
          style={{
            padding: 5,
            marginBottom: 15,
            backgroundColor: "#1F212C",
            borderRadius: 8,
            flexDirection: "row",
          }}
        >
          <Image
            source={exercise.image}
            style={{
              width: 100,
              height: 100,
              borderRadius: 8,
              marginRight: 10,
            }}
          />
          <View style={{ justifyContent: "space-between" }}>
            <Text
              style={{
                fontSize: 16,
                color: "#fff",
                fontFamily: "Poppins-SemiBold",
              }}
            >
              {exercise.name}
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="time-outline" color={"#fff"} size={16} />
              <Text
                style={{
                  fontSize: 16,
                  color: "#fff",
                  fontFamily: "Poppins-Regular",
                  marginTop: 3,
                  marginLeft: 5,
                }}
              >
                {exercise.time} / {exercise.set} set
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="play" color={"#ADF547"} size={16} />
              <Text
                style={{
                  fontSize: 16,
                  color: "#fff",
                  fontFamily: "Poppins-Regular",
                  marginTop: 3,
                  marginLeft: 5,
                }}
              >
                Play
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
};

export default WorkoutExercises;

const styles = StyleSheet.create({});
