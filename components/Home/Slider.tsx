import React, { useEffect, useState } from "react";
import { db } from "@/firebase/config";
import { View, Text, FlatList, Image, Dimensions } from "react-native";
import { collection, DocumentData, getDocs } from "firebase/firestore";

export default function Slider() {
  const width = Dimensions.get("screen").width;
  const [sliders, setSliders] = useState<DocumentData[]>([]);

  const getSliders = async () => {
    setSliders([]);
    const snapshots = await getDocs(collection(db, "slides"));
    snapshots.forEach((doc) =>
      setSliders((sliders) => [...sliders, doc.data()])
    );
  };

  useEffect(() => {
    getSliders();
  }, []);

  return (
    <View className="my-5 scroll-">
      <FlatList
        horizontal
        data={sliders}
        contentContainerClassName="gap-4"
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View key={item.name}>
            <Image
              style={{ width: width * 0.8 }}
              source={{ uri: item.imageUrl }}
              className={"h-48 rounded-xl"}
            />
          </View>
        )}
      />
    </View>
  );
}
