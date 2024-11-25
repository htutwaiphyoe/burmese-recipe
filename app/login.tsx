import { Image, Pressable, Text, View } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import * as Linking from "expo-linking";
import { useCallback, useEffect } from "react";

export const useWarmUpBrowser = () => {
  useEffect(() => {
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = useCallback(async () => {
    try {
      const { createdSessionId, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL("/", { scheme: "pethub" }),
      });

      if (createdSessionId) setActive!({ session: createdSessionId });
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View className="flex-1">
      <Image
        className="w-full h-1/2"
        source={require("assets/images/login.png")}
      />
      <View className="flex-1 gap-5 px-10 justify-evenly">
        <View className="items-center justify-center gap-5">
          <Text className="text-4xl font-bold text-center">
            Ready to make a new friend?
          </Text>
          <Text className="text-xl text-center font-regular">
            Let's adopt a pet you love and make your life happy.
          </Text>
        </View>
        <Pressable onPress={onPress} className="p-5 rounded-lg bg-primary">
          <Text className="text-xl font-bold text-center">Get Started</Text>
        </Pressable>
      </View>
    </View>
  );
}
