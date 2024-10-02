import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Image, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { _retrieveData } from '../../services/assynsStorage';
import Images from '../../assets/images/index'
import { getCurrentUser } from '../../store/actions/action'
import { t } from 'i18next';
import { LightThemeColors, DarkThemeColors } from '../../utilities/constants';
import { useTheme } from '../../../ThemeContext';

export default function Map({ navigation }) {
    const dispatch = useDispatch()
    const { theme } = useTheme();
    const colors = theme === 'dark' ? DarkThemeColors : LightThemeColors;
    const styles = createStyles(colors, theme);

    return (
        <ImageBackground
            style={styles.background}
            resizeMode="cover"
            source={theme === 'dark' ? Images.map : Images.mapWhite}
        />
    );
}

const createStyles = (colors, theme) => {
    return StyleSheet.create({
        background: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
    });
};
