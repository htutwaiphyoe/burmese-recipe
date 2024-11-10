import { stackScreenLayout } from "@/constants/layout";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          ...stackScreenLayout,
          title: "Favorites",
        }}
      />
    </Stack>
  );
}
