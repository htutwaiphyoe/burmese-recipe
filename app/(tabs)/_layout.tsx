import { Tabs } from "expo-router";
import { BlurView } from "expo-blur";
import { cssInterop } from "nativewind";
import { colors } from "@/styles/tokens";
import { StyledTabs } from "@/components/Tabs";
import {
  FontAwesome,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

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
            className="overflow-hidden rounded-tl-2xl rounded-tr-2xl"
          />
        ),
      }}
    >
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          headerShown: false,
          tabBarIcon: (props) => (
            <FontAwesome {...props} name="heart" size={20} />
          ),
        }}
      />
      <Tabs.Screen
        name="playlists"
        options={{
          title: "Playlists",
          headerShown: false,
          tabBarIcon: (props) => (
            <MaterialCommunityIcons {...props} name="playlist-play" size={28} />
          ),
        }}
      />
      <Tabs.Screen
        name="(songs)"
        options={{
          title: "Songs",
          headerShown: false,
          tabBarIcon: (props) => (
            <Ionicons {...props} size={24} name="musical-notes-sharp" />
          ),
        }}
      />
      <Tabs.Screen
        name="artists"
        options={{
          title: "Artists",
          headerShown: false,
          tabBarIcon: (props) => (
            <FontAwesome6 {...props} size={20} name="users-line" />
          ),
        }}
      />
    </StyledTabs>
  );
}
