import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="favorites" options={{ title: "Favorites" }} />
      <Tabs.Screen name="playlists" options={{ title: "Playlists" }} />
      <Tabs.Screen
        name="(songs)"
        options={{ title: "Songs", headerShown: false }}
      />
      <Tabs.Screen name="artists" options={{ title: "Artists" }} />
    </Tabs>
  );
}
