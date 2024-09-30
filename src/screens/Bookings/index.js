import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CustomHeader from '../../components/Header';
import { t } from 'i18next';
import { colors } from '../../utilities/constants';
import BookingStatusTab from '../../components/BookingStatusTab';
import BookingCard from '../../components/BookingCard';

const Bookings = ({ navigation }) => {
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
                style={{ flexDirection: 'row', marginTop: 10, height: 45 }}
            >
                <BookingStatusTab selectedState={selectedTab} setselectedState={setselectedTab} title={t('pending')} />
                <BookingStatusTab selectedState={selectedTab} setselectedState={setselectedTab} title={t('upcoming')} />
                <BookingStatusTab selectedState={selectedTab} setselectedState={setselectedTab} title={t('ongoing')} />
                <BookingStatusTab selectedState={selectedTab} setselectedState={setselectedTab} title={t('completed')} />
            </ScrollView>

            <ScrollView
                style={{ width: '90%', marginTop: 10 }}
                contentContainerStyle={styles.scrollBar}
                showsVerticalScrollIndicator={false}
            >
                <BookingCard />
                <BookingCard />
                <BookingCard />
            </ScrollView>
        </View>
    );
};




export default Bookings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollBar: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 50
    },
});



