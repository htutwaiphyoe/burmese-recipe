import { View } from "react-native";
import Pets from "@/components/Home/Pets";
import Header from "@/components/Home/Header";
import Slider from "@/components/Home/Slider";
import Categories from "@/components/Home/Categories";
import AddNewPet from "@/components/Home/AddNewPet";

export default function HomeScreen() {
  return (
    <View className="gap-5 px-5 py-20 ">
      <Header />
      <Slider />
      <Categories />
      <Pets />
      <AddNewPet />
    </View>
  );
}
