import { Image, Pressable, Text, View } from "react-native";

export default function LoginScreen() {
  return (
    <View className="flex-1">
      <Image
        className="w-full h-1/2"
        source={require("assets/images/login.png")}
      />
      <View className="flex-1 justify-between p-10">
        <View className="justify-center items-center gap-5">
          <Text className="text-center font-bold text-4xl">
            Ready to make a new friend?
          </Text>
          <Text className="text-center font-regular text-xl">
            Let's adopt a pet you love and make your life happy.
          </Text>
        </View>
        <Pressable className="bg-primary rounded-lg p-5 mb-10">
          <Text className="text-center font-semibold text-base">
            Get Started
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
