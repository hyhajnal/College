import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Color = {
  background: '#eee',
  clear: 'rgba(0,0,0,0)',
  facebook: '#3b5998',
  transparent: 'rgba(0,0,0,0)',
  silver: '#F7F7F7',
  steel: '#CCCCCC',
  error: 'rgba(200, 0, 0, 0.8)',
  ricePaper: 'rgba(255,255,255, 0.75)',
  frost: '#D8D8D8',
  cloud: 'rgba(200,200,200, 0.35)',
  windowTint: 'rgba(0, 0, 0, 0.4)',
  panther: '#161616',
  charcoal: '#595959',
  coal: '#2d2d2d',
  bloodOrange: '#fb5f26',
  snow: 'white',
  ember: 'rgba(164, 0, 48, 0.5)',
  fire: '#e73536',
  drawer: 'rgba(30, 30, 29, 0.95)',
  eggplant: '#251a34',
  border: '#483F53',
  banner: '#5F3E63',
  text: '#E0D7E5',
  white: '#ffffff',
  green1: '#ebf8f9',
  green2: '#cfedf0',
  green3: '#a7dfe3',
  green4: '#76cdd3',
  green5: '#3db8c1',
  green6: '#00a2ae',
  green7: '#008997',
  green8: '#00707f',
  green9: '#005667',
  green10: '#003c4e',
  darkText: '#032250',
  lightText: '#7F91A7',
};

export const Common = {
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: 1,
  searchBarHeight: 30,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
  buttonRadius: 4,
  hrHeight: 10,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200
  }
};
