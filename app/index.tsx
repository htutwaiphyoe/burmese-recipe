import { Link } from "expo-router";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 font-regular bg-white items-center justify-center">
      <Link href="/login" className="font-medium">
        Go to Login
      </Link>
    </View>
  );
}
