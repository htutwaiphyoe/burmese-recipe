import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { categories } from "@/constants";
import { cn } from "@/utils";

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(
    categories?.[0]?.name
  );

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
            className="flex-1 gap-2"
            onPress={() => setSelectedCategory(item.name)}
          >
            <View
              className={cn(
                "items-center justify-center p-5 border rounded-lg bg-primary-light border-primary",
                selectedCategory === item.name
                  ? "bg-secondary border-secondary"
                  : ""
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
