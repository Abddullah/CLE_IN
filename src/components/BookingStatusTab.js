
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, } from 'react-native';
import { colors } from '../utilities/constants';
import { Typography } from '../utilities/constants/constant.style';
import { LightThemeColors, DarkThemeColors } from '../utilities/constants';
import { useTheme } from '../../ThemeContext';

const BookingStatusTab = ({ selectedState, setselectedState, title }) => {
    const { theme } = useTheme();
    const colors = theme === 'dark' ? DarkThemeColors : LightThemeColors;
    const styles = createStyles(colors, theme);

    return (
        <TouchableOpacity
            activeOpacity={.8}
            style={[styles.catBox, {
                backgroundColor: selectedState === title ? colors.Primary_01 : colors.Neutral_02,
                borderColor: selectedState !== title ? colors.Primary_01 : colors.black,
                borderWidth: 0.5,
            }]}
            onPress={() => { setselectedState(title) }}
        >
            <Text style={[Typography.text_paragraph, { color: colors.black, fontSize: 16, fontWeight: selectedState !== title ? 'normal' : 'bold' }]}>{title}</Text>
        </TouchableOpacity>
    );
};
export default BookingStatusTab;

const createStyles = (colors, theme) => {
    return StyleSheet.create({
        catBox: {
            width: 105,
            height: 35,
            borderRadius: 25,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 10,
        }
    });
};




