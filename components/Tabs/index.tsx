import { Tabs as $Tabs } from "expo-router";
import { cssInterop } from "nativewind";
import { StyleProp, TextStyle, ViewStyle } from "react-native";

type Props = React.ComponentProps<typeof $Tabs> & {
  tabBarStyle?: ViewStyle;
  tabBarLabelStyle?: StyleProp<TextStyle>;
};

function Tabs({ children, tabBarStyle, tabBarLabelStyle, ...props }: Props) {
  props.screenOptions = {
    ...props.screenOptions,
    tabBarStyle,
    tabBarLabelStyle,
  };
  return <$Tabs {...props}>{children}</$Tabs>;
}

export const StyledTabs = cssInterop(Tabs, {
  tabBarClassName: "tabBarStyle",
  tabBarLabelClassName: "tabBarLabelStyle",
});
