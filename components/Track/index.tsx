import FastImage from "react-native-fast-image";
import { unknownTrackImageUri } from "@/constants/images";
import {
  View,
  TouchableHighlight,
  TouchableHighlightProps,
} from "react-native";

type Props = TouchableHighlightProps;

export function Track(props: Props) {
  return (
    <TouchableHighlight {...props}>
      <View>
        <FastImage
          className="w-12 h-12 rounded-lg"
          source={{
            uri: unknownTrackImageUri,
            priority: FastImage.priority.normal,
          }}
        />
      </View>
    </TouchableHighlight>
  );
}
