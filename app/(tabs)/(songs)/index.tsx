import { Tracks } from "@/components/Tracks";
import { ScrollView, Text, View } from "react-native";

export default function SongsScreen() {
  return (
    <View className="screen">
      <ScrollView>
        <Tracks scrollEnabled={false} />
      </ScrollView>
    </View>
  );
}
