import { Stack } from "expo-router";
import { View } from "react-native";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Songs", headerShown: false }}
      />
    </Stack>
  );
}
