import { Link } from "expo-router";
import { Image, Text, View } from "react-native";

export default function LoginScreen() {
  return (
    <View className="flex-1">
      <Image
        className="w-full h-1/2"
        source={require("assets/images/login.png")}
      />
      <View className="flex-1 justify-evenly px-10 gap-5">
        <View className="justify-center items-center gap-5">
          <Text className="text-center font-bold text-4xl">
            Ready to make a new friend?
          </Text>
          <Text className="text-center font-regular text-xl">
            Let's adopt a pet you love and make your life happy.
          </Text>
        </View>
        <Link
          href="/"
          className="bg-primary text-center font-bold text-xl rounded-lg p-5"
        >
          Get Started
        </Link>
      </View>
    </View>
  );
}
