import { colors } from "@/styles/tokens";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

export const stackScreenLayout: NativeStackNavigationOptions = {
  headerLargeTitle: true,
  headerLargeStyle: {
    backgroundColor: colors.background,
  },
  headerLargeTitleStyle: {
    color: colors.default,
  },
  headerTintColor: colors.default,
  headerTransparent: true,
  headerBlurEffect: "prominent",
  headerShadowVisible: false,
};
