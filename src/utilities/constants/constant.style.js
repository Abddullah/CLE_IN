// import { StyleSheet } from 'react-native'
// import colors from './colors';

// export const Typography = StyleSheet.create({
//     text_heading: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         color: colors.black
//     },
//     text_subHeading: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: colors.Primary_01,
//         textAlign: 'center'
//     },
//     text_subHeading_1: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         color: colors.black,
//         textAlign: 'center'
//     },
//     text_paragraph_1: {
//         fontSize: 16,
//         color: colors.Neutral_01,
//         textAlign: 'center'
//     },
//     text_CTA1: {
//         fontSize: 16,
//         color: colors.white,
//         fontWeight: 'bold',
//         textAlign: 'center'
//     },
//     text_paragraph: {
//         fontSize: 14,
//         color: colors.Neutral_01,
//         textAlign: 'center'
//     },
// })


import { StyleSheet, Appearance } from 'react-native';
import { LightThemeColors, DarkThemeColors } from './colors';

// Detect the current theme
const colorScheme = Appearance.getColorScheme();
const colors = colorScheme === 'dark' ? DarkThemeColors : LightThemeColors;

console.log(colors, 'colorsaaaaaaa');


export const Typography = StyleSheet.create({
  text_heading: {
    // fontSize: 24,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Lato-Regular'
    // color: colors.black,
  },
  text_subHeading: {
    // fontSize: 20,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Lato-Regular',
    // color: colors.Primary_01,
    textAlign: 'center',
  },
  text_subHeading_1: {
    // fontSize: 18,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Lato-Regular',
    // color: colors.black,
    textAlign: 'center',
  },
  text_paragraph_1: {
    // fontSize: 16,
    fontSize: 14,
    // color: colors.Neutral_01,
    textAlign: 'center',
    fontFamily: 'Lato-Regular'
  },
  text_CTA1: {
    // fontSize: 16,
    fontSize: 14,
    // color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Lato-Regular'
  },
  text_paragraph: {
    // fontSize: 14,
    fontSize: 12,
    fontFamily: 'Lato-Regular',
    // color: colors.Neutral_01,
    textAlign: 'center',
  },
});
