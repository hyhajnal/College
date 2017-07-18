import { Platform, Dimensions } from 'react-native';

const isIOS = Platform.OS === 'ios';

const { width, height } = Dimensions.get('window');

// const pt2px = pt => PixelRatio.getPixelSizeForLayoutSize(pt);
const uiHeightPx = 640;

const px2dp = uiElementPx => uiElementPx * height / uiHeightPx;

export { width, height, px2dp, isIOS };
