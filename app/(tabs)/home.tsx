import { View } from "react-native";
import Header from "@/components/Home/Header";
import Slider from "@/components/Home/Slider";
import Categories from "@/components/Home/Categories";

export default function HomeScreen() {
  return (
    <View className="px-5 py-20">
      <Header />
      <Slider />
      <Categories />
    </View>
  );
}
