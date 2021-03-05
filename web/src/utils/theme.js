import {breakpoints} from './breakpoints'
import {rgba} from 'polished'

const defaultColors = {
  transparent: 'transparent',
  black: '#001626',
  white: '#ffffff',
  oat: '#f3f0ee',
  // primary
  bluegreen: '#00788c',
  bluegreenLight: '#cce4e8',
  bluegreenLighter: '#f2f5f6',
  bluegreenDark: '#003c50',
  bluegreenDarker: '#001626',
  // accent
  accent: '#ff7575',
  accentLight: '#ffd6d6',
  accentLighter: '#fff8f8'
}

const colors = {
  transparent: defaultColors.transparent,
  primary: defaultColors.bluegreenDark,
  secondary: defaultColors.bluegreen,
  accent: defaultColors.accent,
  muted: defaultColors.oat,
  bg: defaultColors.white,
  bgDark: defaultColors.bluegreenDark,
  bgLight: defaultColors.bluegreenLighter,
  bgAccent: defaultColors.accentLighter,
  border: defaultColors.bluegreenDark,
  shadows: rgba(defaultColors.primary, 0.15),
  // text
  heading: defaultColors.bluegreenDark,
  text: defaultColors.bluegreen

}

const theme = {
  initialColorModeName: 'light',
  colors: colors,
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  breakpoints: [
    `${breakpoints.sm}px`,
    `${breakpoints.md}px`,
    `${breakpoints.lg}px`,
    `${breakpoints.xl}px`
  ],
  fonts: {
    heading: "'Recoleta Alt', sans-serif",
    body: "'Sofia Pro', sans-serif"
  }
}

export default theme
