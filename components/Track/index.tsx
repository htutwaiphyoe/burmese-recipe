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
  return <TouchableHighlight {...props}>ok</TouchableHighlight>;
}
