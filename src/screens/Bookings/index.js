import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CustomHeader from '../../components/Header';
import { t } from 'i18next';
import BookingStatusTab from '../../components/BookingStatusTab';
import BookingCard from '../../components/BookingCard';
import { LightThemeColors, DarkThemeColors } from '../../utilities/constants';
import { useTheme } from '../../../ThemeContext';
import BookingCardProvider from '../../components/BookingCardProvider';

const Bookings = ({ navigation }) => {
    const { theme, toggleTheme } = useTheme();
    const colors = theme === 'dark' ? DarkThemeColors : LightThemeColors;
    const styles = createStyles(colors, theme);
    let user = useSelector((state) => state.reducer.user);
    let isError = useSelector((state) => state.reducer.isError);

    const [selectedTab, setselectedTab] = useState('');

    return (
        <View style={styles.container}>
            <CustomHeader
                title={t('booking')}
                isLeft={true}
                leftPress={() => { navigation.goBack() }}
            />
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ flexDirection: 'row', marginTop: 10, height: 48, }}
            >
                <BookingStatusTab selectedState={selectedTab} setselectedState={setselectedTab} title={t('pending')} />
                <BookingStatusTab selectedState={selectedTab} setselectedState={setselectedTab} title={t('upcoming')} />
                <BookingStatusTab selectedState={selectedTab} setselectedState={setselectedTab} title={t('ongoing')} />
                <BookingStatusTab selectedState={selectedTab} setselectedState={setselectedTab} title={t('completed')} />
            </ScrollView>

            <ScrollView
                style={{ width: '90%', }}
                contentContainerStyle={styles.scrollBar}
                showsVerticalScrollIndicator={false}
            >
                {
                    user.role === 'user' &&
                    <>
                        <BookingCard />
                        <BookingCard />
                        <BookingCard />
                    </>
                }
                {
                    user.role === 'provider' &&
                    <>
                        <BookingCardProvider />
                    </>
                }


            </ScrollView>
        </View>
    );
};

export default Bookings;

const createStyles = (colors, theme) => {
    return StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
        },
        scrollBar: {
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingBottom: 50
        },
    });
};



