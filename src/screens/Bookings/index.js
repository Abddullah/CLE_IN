import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CustomHeader from '../../components/Header';
import { t } from 'i18next';
import { colors } from '../../utilities/constants';
import { Typography } from '../../utilities/constants/constant.style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import BookingStatusTab from '../../components/BookingStatusTab';
import images from '../../assets/images';

const Bookings = ({ navigation }) => {
    let isError = useSelector((state) => state.reducer.isError);
    const [selectedTab, setselectedTab] = useState('');
    const [bookings, setbookings] = useState([
        {
            time: '10:00 AM - 12:00 AM',
            status: 'Pending',
            price: '450',
            category: 'Cleaning at Home',
            customerInfo: {
                name: 'Tokyo',
                image: images.profilePic,
                phone: '+923450558623'
            }
        },
        {
            time: '10:00 AM - 12:00 AM',
            status: 'Pending',
            price: '450',
            category: 'Cleaning at Company',
            customerInfo: {
                name: 'Tokyo',
                image: images.profilePic,
                phone: '+923450558623'
            }
        },

    ]);

    return (
        <View style={styles.container}>
            <CustomHeader
                title={t('booking')}
                isLeft={true}
                leftPress={() => { navigation.goBack() }}
            />

            <ScrollView
                style={{ width: '90%', marginTop: 10 }}
                contentContainerStyle={styles.scrollBar}
                showsVerticalScrollIndicator={false}
            >
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ flexDirection: 'row', marginTop: 10 }}
                >
                    <BookingStatusTab selectedState={selectedTab} setselectedState={setselectedTab} title={t('pending')} />
                    <BookingStatusTab selectedState={selectedTab} setselectedState={setselectedTab} title={t('upcoming')} />
                    <BookingStatusTab selectedState={selectedTab} setselectedState={setselectedTab} title={t('ongoing')} />
                    <BookingStatusTab selectedState={selectedTab} setselectedState={setselectedTab} title={t('completed')} />
                </ScrollView>

                <View style={{ width: '100%', backgroundColor: 'red' }}>

                </View>



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



