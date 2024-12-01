import React from "react";
import { cn } from "@/utils";
import { categories } from "@/constants";
import { useCategoryStore } from "@/store";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";

export default function Categories() {
  const { category, setCategory } = useCategoryStore();

  return (
    <View className="gap-3">
      <Text className="text-xl font-medium">Categories</Text>
      <FlatList
        numColumns={4}
        data={categories}
        columnWrapperClassName="gap-3"
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.name}
            activeOpacity={0.7}
            className="flex-1 gap-2"
            onPress={() => setCategory(item.name)}
          >
            <View
              className={cn(
                "items-center justify-center p-5 border rounded-lg bg-primary-light border-primary",
                category === item.name ? "bg-secondary border-secondary" : ""
              )}
            >
              <Image source={item.image} className="w-10 h-10" />
            </View>
            <Text className="text-center font-regular">{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
