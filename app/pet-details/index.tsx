import { useEffect } from "react";
import { colors } from "@/styles/tokens";
import { View, Image } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";

export default function PetDetails() {
  const pet = useLocalSearchParams();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerBackTitle: "Back",
      headerTransparent: true,
      headerTintColor: colors.black,
    });
  }, []);

  return (
    <View>
      <View>
        <Image
          source={{ uri: pet.imageUrl as string }}
          className="w-full h-[45vh] object-cover"
        />
      </View>
    </View>
  );
}
