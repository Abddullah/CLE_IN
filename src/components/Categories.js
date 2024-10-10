import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
// local import
import { Typography } from '../utilities/constants/constant.style';
import { LightThemeColors, DarkThemeColors } from '../utilities/constants';
import { useTheme } from '../../ThemeContext';
import { t } from 'i18next';

const Categories = ({
    icon,
    title,
    submitHandler,
}) => {
    const { theme } = useTheme();
    const colors = theme === 'dark' ? DarkThemeColors : LightThemeColors;
    const styles = createStyles(colors, theme);

    return (
        <TouchableOpacity
            onPress={submitHandler}
            activeOpacity={.8}
            style={styles.catBox}
        >
            <Image
                resizeMode="contain"
                style={{ width: 75, height: 75 }}
                source={icon}
            />
            <Text style={[Typography.text_paragraph, { color: colors.black }]}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Categories;

const createStyles = (colors, theme) => {
    return StyleSheet.create({
        catBox: {
            width: 98,
            marginHorizontal: 10,
            justifyContent: 'flex-start',
            alignItems: 'center',
            // backgroundColor: 'red'
        }
    });
};

