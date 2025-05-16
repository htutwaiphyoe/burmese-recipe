import {colors} from '@/theme';
import {StyleSheet} from 'react-native';
import {fontFamily} from '@/utils/fontFamily';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
  },
  header: {
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    color: colors.white,
    fontFamily: fontFamily('900'),
  },
  icon: {
    marginRight: 16,
    color: colors.white,
  },
});
