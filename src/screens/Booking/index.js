import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CustomHeader from '../../components/Header';
import { t } from 'i18next';
import { colors } from '../../utilities/constants';
import CTAButton1 from '../../components/CTA_BUTTON1';
import { Typography } from '../../utilities/constants/constant.style';
import { MapSmall } from '../../assets/icons';
import { useRoute } from '@react-navigation/native';
import { SliderBox } from "react-native-image-slider-box";
import FastImage from 'react-native-fast-image'
import Images from '../../assets/images/index'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HorizontalList from '../../components/horizontalList';

const Booking = ({ navigation }) => {
    let isError = useSelector((state) => state.reducer.isError);
    const [selectedHour, setselectedHour] = useState('');

    return (
        <View style={styles.container}>
            <CustomHeader
                title={t('bookservice')}
                isLeft={true}
                leftPress={() => { navigation.goBack() }}
            />

            <View style={{ width: '90%', marginTop: 10, }}>
                <Text style={[Typography.text_paragraph_1, { fontWeight: 'bold', color: colors.black, textAlign: 'left' }]}>{t('howmanyhoursdoyou')}</Text>
            </View>

            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ flexDirection: 'row', marginTop: 10, width: '90%' }}
            >
                <HorizontalList selectedState={selectedHour} setselectedState={setselectedHour} title={'1'} />
                <HorizontalList selectedState={selectedHour} setselectedState={setselectedHour} title={'2'} />
                <HorizontalList selectedState={selectedHour} setselectedState={setselectedHour} title={'3'} />
                <HorizontalList selectedState={selectedHour} setselectedState={setselectedHour} title={'4'} />
                <HorizontalList selectedState={selectedHour} setselectedState={setselectedHour} title={'5'} />
                <HorizontalList selectedState={selectedHour} setselectedState={setselectedHour} title={'6'} />
                <HorizontalList selectedState={selectedHour} setselectedState={setselectedHour} title={'7'} />
                <HorizontalList selectedState={selectedHour} setselectedState={setselectedHour} title={'8'} />
                <HorizontalList selectedState={selectedHour} setselectedState={setselectedHour} title={'9'} />
                <HorizontalList selectedState={selectedHour} setselectedState={setselectedHour} title={'10'} />
            </ScrollView>


            <ScrollView
                style={{ width: '90%', marginTop: 10 }}
                contentContainerStyle={styles.scrollBar}
                showsVerticalScrollIndicator={false}
            >

            </ScrollView>

            <View style={{ width: '90%', marginBottom: 20 }}>
                <CTAButton1 title={t('next')} submitHandler={() => { }} />
            </View>

        </View>
    );
};

export default Booking;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    scrollBar: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 50
    },
    textAreaContainer: {
        height: 185,
        width: '100%',
        borderRadius: 5,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: colors.white
    },
    headerSection: {
        height: 230,
        width: '100%',
        overflow: 'hidden',
        borderRadius: 10,
        backgroundColor: 'white',
    },
    list: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%'
    },
    list2: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '100%'
    },
    reviewContiner: {
        flex: 1,
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between',
    },
    catBox: {
        width: 90,
        height: 40,
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    }

});




