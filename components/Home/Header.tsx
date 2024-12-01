import React from "react";
import { View, Text, Image } from "react-native";
import { useUser } from "@clerk/clerk-expo";

export default function Header() {
  const { user } = useUser();

  return (
    <View className="flex flex-row items-start justify-between">
      <View className="flex gap-1">
        <Text className="text-xl font-medium">Welcome,</Text>
        <Text className="text-2xl font-semibold">{user?.fullName}</Text>
      </View>
      <Image
        source={{ uri: user?.imageUrl }}
        className="rounded-full w-11 h-11"
      />
    </View>
  );
}
