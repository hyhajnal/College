import React from 'react';
import ReactNative, { StyleSheet } from 'react-native';
import { Color } from '../utils/Theme';
import { px2dp } from '../utils/ToolUtil';

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
    style={[styles.font, { color: Color.textLink }, style]}
    {...props}
  />);
}

export function NormalText({ style, ...props }) {
  return (<ReactNative.Text
    style={[styles.font, styles.normal, style]}
    {...props}
  />);
}

const styles = StyleSheet.create({
  h1: {
    fontSize: px2dp(16),
    lineHeight: px2dp(18),
    color: Color.textDark,
    fontWeight: 'bold',
    letterSpacing: -1,
  },
  h2: {
    fontSize: px2dp(14),
    lineHeight: px2dp(20),
    color: Color.textDark,
    fontWeight: 'bold',
  },
  p: {
    fontSize: px2dp(15),
    lineHeight: px2dp(23),
    color: Color.textLight,
  },
  normal: {
    fontSize: px2dp(14),
    fontWeight: 'normal',
    color: Color.textDark,
  },
});
