import React from 'react';
import ReactNative, { StyleSheet, Dimensions } from 'react-native';
import { Color } from '../utils/Theme';

export function Text({ style, ...props }) {
  return (<ReactNative.Text
    style={[styles.font, style]}
    {...props}
  />);
}

export function Heading1({ style, ...props }) {
  return (<ReactNative.Text
    style={[styles.font, styles.h1, style]}
    {...props}
  />);
}

export function Heading2({ style, ...props }) {
  return (<ReactNative.Text
    style={[styles.font, styles.h2, style]}
    {...props}
  />);
}

export function Paragraph({ style, ...props }) {
  return (<ReactNative.Text
    style={[styles.font, styles.p, style]}
    {...props}
  />);
}

export function LinkText({ style, ...props }) {
  return (<NormalText
    style={[styles.font, { color: Colors.textLink }, style]}
    {...props}
  />);
}

export function NormalText({ style, ...props }) {
  return (<ReactNative.Text
    style={[styles.font, styles.normal, style]}
    {...props}
  />);
}


const scale = Dimensions.get('window').width / 375;

function normalize(size) {
  return Math.round(scale * size);
}

const styles = StyleSheet.create({
  h1: {
    fontSize: normalize(16),
    lineHeight: normalize(22),
    color: Color.textDark,
    fontWeight: 'bold',
    letterSpacing: -1,
  },
  h2: {
    fontSize: normalize(14),
    lineHeight: normalize(20),
    color: Color.textDark,
    fontWeight: 'bold',
  },
  p: {
    fontSize: normalize(15),
    lineHeight: normalize(23),
    color: Color.textLight,
  },
  normal: {
    fontSize: normalize(14),
    fontWeight: 'normal',
    color: Color.textDark,
  },
});
