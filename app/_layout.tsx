import { Stack } from "expo-router";
import "@/styles/global.css";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Layout() {
  return (
    <SafeAreaProvider>
      <RootNavigation />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

function RootNavigation() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ title: "Home" }} />
    </Stack>
  );
}
