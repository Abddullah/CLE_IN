
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ChatBox from '../../components/chatBox';
import CommentInput from '../../components/commentsInput';
import CustomHeader from '../../components/Header';
import { t } from 'i18next';
import { LightThemeColors, DarkThemeColors } from '../../utilities/constants';
import { useTheme } from '../../../ThemeContext';

export default function Support({ ...props }) {
    const { theme, toggleTheme } = useTheme();
    const colors = theme === 'dark' ? DarkThemeColors : LightThemeColors;
    const styles = createStyles(colors, theme);

    const navigation = useNavigation();

    return (
        <View style={styles.mainContainer}>
            <CustomHeader
                title={t('support')}
                isLeft={true}
                leftPress={() => { navigation.goBack() }}
            />
            <View style={styles.body}>
                <ChatBox />
            </View>
            {/* <View style={styles.footer}>
                <CommentInput />
            </View> */}
        </View>
    );
}

const createStyles = (colors, theme) => {
    return StyleSheet.create({
        mainContainer: {
            flex: 1,
        },
        body: {
            flex: 1,
        },
        footer: {
            paddingVertical: 30,
            justifyContent: 'center',
            alignItems: 'center',
        },
    });
};
