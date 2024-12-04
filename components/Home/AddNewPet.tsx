import React from "react";
import { colors } from "@/styles/tokens";
import { Text, TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function AddNewPet() {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="flex flex-row items-center justify-center gap-3 p-5 border border-dashed rounded-xl bg-primary-light border-primary"
    >
      <MaterialIcons name="pets" size={20} color={colors.primary} />
      <Text className="text-lg font-bold text-primary">Add New Pet</Text>
    </TouchableOpacity>
  );
}
