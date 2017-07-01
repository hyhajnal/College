import { Platform, Dimensions } from 'react-native';

export const isIOS = Platform.OS === 'ios';

export const { width, height } = Dimensions.get('window');
