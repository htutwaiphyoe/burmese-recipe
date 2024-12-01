import React from "react";
import { pets } from "@/constants";
import { useCategoryStore } from "@/store";
import { View, Text, FlatList, Image } from "react-native";

export default function Pets() {
  const { category } = useCategoryStore();

  return (
    <FlatList
      horizontal
      contentContainerClassName="gap-3"
      showsHorizontalScrollIndicator={false}
      data={pets.filter((pet) => pet.category === category)}
      renderItem={({ item }) => (
        <View className="gap-3 p-3 bg-white rounded-xl" key={item.name}>
          <Image
            source={{ uri: item.imageUrl }}
            className="object-cover w-40 h-32 rounded-lg"
          />
          <View className="flex flex-row items-end justify-between gap-2">
            <View className="gap-0.5">
              <Text className="text-lg font-medium">{item.name}</Text>
              <Text
                numberOfLines={1}
                className="text-sm max-w-28 font-regular text-gray"
              >
                {item.breed}
              </Text>
            </View>
            <Text className="px-1.5 py-1 text-xs font-bold rounded-md bg-primary-light text-primary">
              {item.age} YRS
            </Text>
          </View>
        </View>
      )}
    />
  );
}
