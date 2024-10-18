
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CustomHeader from '../../components/Header';
import { t } from 'i18next';
import { Typography } from '../../utilities/constants/constant.style';
import { LightThemeColors, DarkThemeColors } from '../../utilities/constants';
import { useTheme } from '../../../ThemeContext';
import { SubscriptionIcon, } from '../../assets/icons';
import CTAButton1 from '../../components/CTA_BUTTON1';

const Subscription = ({ navigation }) => {
    const { theme, toggleTheme } = useTheme();
    const colors = theme === 'dark' ? DarkThemeColors : LightThemeColors;
    const styles = createStyles(colors, theme);

    let isError = useSelector((state) => state.reducer.isError);

    return (
        <View style={styles.container}>
            <CustomHeader
                title={t('preferences')}
                isLeft={true}
                leftPress={() => { navigation.goBack() }}
            />
            <View style={styles.boxContainer}>
                <SubscriptionIcon />
                <Text style={[Typography.text_heading, { color: colors.White_Primary_01, marginTop: 10 }]}>{t('UpgradeToPremium')}</Text>
                <Text style={[Typography.text_subHeading_1, { color: colors.black, marginTop: 10, marginBottom: 10 }]}>{t('UnlimitedPostJobs')}</Text>


                <CTAButton1 title={t('Subscribe')} />

                <Text style={[Typography.text_subHeading_1, { color: colors.black, marginTop: 10 }]}>{t('WhenwillIbebilled')}</Text>
                <Text style={[Typography.text_paragraph, { color: colors.black, marginTop: 10 }]}>{t('YourItunesAccount')}</Text>

            </View>
        </View>
    );
};

export default Subscription;

const createStyles = (colors, theme) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        boxContainer: {
            flex: 1,
            width: '90%',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: 20,
        },
        box: {
            marginTop: 10,
            height: 44,
            width: 106,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.Primary_03
        },
    });
};
