import { useUser } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";
import { View } from "react-native";

export default function WelcomeScreen() {
  const { user } = useUser();

  return (
    <View className="items-center justify-center flex-1 bg-white font-regular">
      {user ? <Redirect href="/(tabs)/home" /> : <Redirect href="/login" />}
    </View>
  );
}
