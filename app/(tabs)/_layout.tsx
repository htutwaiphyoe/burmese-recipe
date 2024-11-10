import { Tabs } from "expo-router";
import { BlurView } from "expo-blur";
import { colors } from "@/styles/tokens";
import { StyledTabs } from "@/components/Tabs";
import { cssInterop, StyleSheet } from "nativewind";

cssInterop(BlurView, {
  className: "style",
});

export default function Layout() {
  return (
    <StyledTabs
      tabBarLabelClassName="font-medium text-xs"
      tabBarClassName="pt-2 border-t-0 rounded-t-2xl absolute"
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarBackground: () => (
          <BlurView
            intensity={80}
            style={{ ...StyleSheet.absoluteFillObject }}
            className="overflow-hidden rounded-tl-2xl rounded-tr-2xl"
          />
        ),
      }}
    >
      <Tabs.Screen name="favorites" options={{ title: "Favorites" }} />
      <Tabs.Screen name="playlists" options={{ title: "Playlists" }} />
      <Tabs.Screen
        name="(songs)"
        options={{ title: "Songs", headerShown: false }}
      />
      <Tabs.Screen name="artists" options={{ title: "Artists" }} />
    </StyledTabs>
  );
}
