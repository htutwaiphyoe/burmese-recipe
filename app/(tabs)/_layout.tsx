import { Tabs } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import { colors } from "@/styles/tokens";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: colors.primary }}>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: (props) => <Feather {...props} name="home" />,
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          title: "Favorite",
          tabBarIcon: (props) => <Feather {...props} name="heart" />,
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          title: "Inbox",
          tabBarIcon: (props) => <Feather {...props} name="inbox" />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: (props) => <Feather name="user" {...props} />,
        }}
      />
    </Tabs>
  );
}
