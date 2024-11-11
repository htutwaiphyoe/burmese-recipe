import { FlatList, FlatListProps } from "react-native";
import library from "@/data/library.json";

type Props = FlatListProps<(typeof library)[0]>;

export function Tracks(props: Props) {
  return <FlatList {...props} data={library} renderItem={() => null} />;
}
