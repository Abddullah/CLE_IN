
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../utilities/constants';
import { BackIcon, CallIcon } from '../assets/icons';
import { LightThemeColors, DarkThemeColors } from '../utilities/constants';
import { useTheme } from '../../ThemeContext';

const CustomHeader = ({
    title,
    leftPress = () => { },
    rightPress = () => { },
    isLeft,
    isRight = false,
}) => {
    const { theme } = useTheme();
    const colors = theme === 'dark' ? DarkThemeColors : LightThemeColors;
    const styles = createStyles(colors, theme);

    return (
        <View style={styles.wrapper}>
            <TouchableOpacity style={{ flex: 2, }} activeOpacity={0.8} onPress={leftPress}>
                {
                    isLeft && <BackIcon style={{ marginLeft: 15 }} />
                }
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity style={{ flex: 2, alignItems: 'flex-end', }} activeOpacity={0.8} onPress={isRight ? rightPress : null}>

                {
                    isRight && <CallIcon style={{ fontSize: 30, color: 'white', marginRight: 15 }} />
                }
            </TouchableOpacity>
        </View>
    );
};

export default CustomHeader;

const createStyles = (colors, theme) => {
    return StyleSheet.create({
        wrapper: {
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 80,
            backgroundColor: colors.Primary_01
        },
        title: {
            fontSize: 18,
            fontWeight: 'bold',
            color: 'white'
        },
    });
};

