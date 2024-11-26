import React from "react";
import { View, Text, Image } from "react-native";
import { useUser } from "@clerk/clerk-expo";

export default function Header() {
  const { user } = useUser();

  return (
    <View className="flex flex-row items-start justify-between">
      <View className="flex gap-1">
        <Text className="text-xl">Welcome,</Text>
        <Text className="text-2xl font-bold">{user?.fullName}</Text>
      </View>
      <Image
        source={{ uri: user?.imageUrl }}
        className="w-10 h-10 rounded-full"
      />
    </View>
  );
}
