import "@/styles/global.css";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Layout() {
  return (
    <SafeAreaProvider>
      <RootNavigation />
      <StatusBar style="light" />
    </SafeAreaProvider>
  );
}

function RootNavigation() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ title: "Home", headerShown: false }}
      />
    </Stack>
  );
}
