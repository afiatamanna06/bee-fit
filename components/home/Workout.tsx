import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Workout as WorkoutTypes } from "../../data";

interface propTypes {
  workout: WorkoutTypes;
  onPress?: () => void;
}

const Workout = ({ workout, onPress }: propTypes) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        backgroundColor: "#1F212C",
        marginRight: 20,
        borderRadius: 8,
        overflow: "hidden",
      }}
    >
      <Image
        source={workout.image}
        style={{
          width: 270,
          height: 200,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}
      />
      <View style={{ padding: 10 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              fontSize: 16,
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
            fontSize: 16,
            color: "#fff",
            fontFamily: "Poppins-Regular",
          }}
        >
          {workout.coach}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Workout;

const styles = StyleSheet.create({});
