import { colors } from "@/styles/tokens";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

export const stackScreenLayout: NativeStackNavigationOptions = {
  headerLargeTitle: true,
  headerLargeStyle: {
    backgroundColor: colors.background,
  },
  headerLargeTitleStyle: {
    color: colors.text,
  },
  headerTintColor: colors.text,
  headerTransparent: true,
  headerBlurEffect: "prominent",
  headerShadowVisible: false,
};
