import { FlatList, FlatListProps } from "react-native";
import library from "@/data/library.json";
import { Track as $Track } from "@/components/Track";

export type Track = (typeof library)[0];

type TracksProps = Partial<FlatListProps<Track>>;

export function Tracks(props: TracksProps) {
  return (
    <FlatList
      {...props}
      data={library}
      renderItem={({ item }) => <$Track data={item} />}
    />
  );
}
