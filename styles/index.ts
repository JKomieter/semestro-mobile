import { customColors } from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightBg: {
    backgroundColor: customColors.primary[900],
  },
  blackBg: {
    backgroundColor: customColors.secondary[900],
  }
});