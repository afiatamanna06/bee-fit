import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { workoutPlans } from "../../data";
import { Ionicons } from "@expo/vector-icons";

const WorkoutPlan = () => {
  return (
    <View style={{ marginHorizontal: 15 }}>
      {workoutPlans.map((plan) => (
        <TouchableOpacity
          key={plan.id}
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
            source={plan.image}
            style={{
              width: 100,
              height: 100,
              borderRadius: 8,
              marginRight: 10,
            }}
          />
          <View>
            <Text
              style={{
                fontSize: 16,
                color: "#fff",
                fontFamily: "Poppins-SemiBold",
              }}
            >
              {plan.name}
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="calendar-outline" color={"#fff"} size={16} />
              <Text
                style={{
                  fontSize: 16,
                  color: "#fff",
                  fontFamily: "Poppins-Regular",
                  marginTop: 3,
                  marginLeft: 5,
                }}
              >
                {plan.duration} | {plan.location}
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ display: "flex", flexDirection: "row" }}>
                {[...Array(plan.rating)].map((idx) => (
                  <Ionicons name="star" key={idx} color={"#F2E205"} size={16} />
                ))}
              </View>
              <Text
                style={{
                  fontSize: 16,
                  color: "#fff",
                  fontFamily: "Poppins-Regular",
                  marginTop: 3,
                  marginLeft: 5,
                }}
              >
                {plan.rating}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default WorkoutPlan;

const styles = StyleSheet.create({});
