import FastImage from "react-native-fast-image";
import { unknownTrackImageUri } from "@/constants/images";
import {
  View,
  TouchableHighlight,
  TouchableHighlightProps,
  Text,
  Image,
} from "react-native";
import { cn } from "@/utils";
import { Track as $Track } from "@/components/Tracks";

type Props = TouchableHighlightProps & {
  data: $Track;
};

export function Track({ data, ...props }: Props) {
  return (
    <TouchableHighlight {...props}>
      <View className="flex flex-row items-center pr-5 gap-y-6">
        <View>
          <Image src={data.artwork} />
          <FastImage
            className={cn("w-12 h-12 rounded-lg", "opacity-100")}
            source={{
              priority: FastImage.priority.normal,
              uri: data.artwork ?? unknownTrackImageUri,
            }}
          />
        </View>
        <View className="w-full">
          <Text
            numberOfLines={1}
            className={cn(
              "text-normal text-xl font-medium max-w-[90%]",
              "text-default"
            )}
          >
            {data.title}
          </Text>
          <Text
            numberOfLines={1}
            className="mt-1 text-sm text-normal text-muted"
          >
            {data.artist}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}
