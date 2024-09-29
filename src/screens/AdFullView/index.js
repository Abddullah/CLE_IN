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

const AdFullView = ({ navigation }) => {
    const route = useRoute();
    let isError = useSelector((state) => state.reducer.isError);
    let data = route.params.item;
    // console.log(data, "data");
    return (
        <View style={styles.container}>
            <CustomHeader
                title={t('serviceprovider')}
                isLeft={true}
                leftPress={() => { navigation.goBack() }}
            />

            <ScrollView
                style={{ width: '90%', marginTop: 10 }}
                contentContainerStyle={styles.scrollBar}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.headerSection}>
                    <SliderBox
                        autoplay={true}
                        ImageComponent={FastImage}
                        images={data.images}
                        sliderBoxHeight={230}
                        onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                        dotColor={colors.Primary_01}
                        inactiveDotColor="#90A4AE"
                        resizeMethod={'resize'}
                        resizeMode={'cover'}
                    />
                </View>

                <View style={styles.list}>
                    <Text style={[Typography.text_paragraph_1, { fontWeight: 'bold', color: colors.black, }]}>{t('title')}</Text>
                    <Text style={[Typography.text_paragraph, {}]}>{data.title}</Text>
                </View>

                <View style={styles.list}>
                    <Text style={[Typography.text_paragraph_1, { fontWeight: 'bold', color: colors.black, }]}>{t('description')}</Text>
                    <Text style={[Typography.text_paragraph, { textAlign: 'left' }]}>{data.description}</Text>
                </View>

                <View style={styles.list2}>
                    <Text style={[Typography.text_paragraph_1, { fontWeight: 'bold', color: colors.black, }]}>{t('price')}</Text>
                    <Text style={[Typography.text_paragraph_1, { fontWeight: 'bold', color: colors.black, }]}>{'$' + data.price + '/hr'}</Text>
                </View>

                <View style={styles.list}>
                    <Text style={[Typography.text_paragraph_1, { fontWeight: 'bold', color: colors.black, }]}>{t('location')}</Text>
                    <MapSmall width={'100%'} marginTop={10} />
                </View>


                <View style={[styles.list2, { marginTop: 20 }]}>
                    <Text style={[Typography.text_paragraph_1, { fontWeight: 'bold', color: colors.black, }]}>{t('reviews')}</Text>
                    <TouchableOpacity
                        activeOpacity={.8}
                        onPress={() => { navigation.navigate('Reviews') }}
                    >
                        <Text style={[Typography.text_paragraph_1, { fontWeight: 'bold', color: colors.Primary_01, }]}>{t('seeAll')}</Text>
                    </TouchableOpacity>
                </View>

                <View style={[{ flex: 1, height: 50, }, styles.list2]}>
                    <View style={styles.reviewContiner}>
                        <Image
                            resizeMode="contain"
                            style={{ borderRadius: 100, width: 48, height: 48 }}
                            source={Images.profilePic}
                        />
                        <View>
                            <Text style={[Typography.text_paragraph_1, { fontWeight: 'bold', color: colors.Primary_01, }]}>{'Charollette Hanlin'}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <FontAwesome name="star" size={20} color={colors.yellow} />
                                <FontAwesome name="star" size={20} color={colors.yellow} />
                                <FontAwesome name="star" size={20} color={colors.yellow} />
                                <FontAwesome name="star" size={20} color={colors.yellow} />
                                <FontAwesome name="star" size={20} color={colors.yellow} />
                            </View>
                        </View>
                        <Text style={Typography.text_paragraph}>{'23 May, 2023 | 02:00 PM'}</Text>
                    </View>
                </View>
                <View style={styles.list2}>
                    <Text style={[Typography.text_paragraph, { textAlign: 'left' }]}>{'Lorem ipsum dolor sit amet consectetur. Purus massa tristique arcu tempus ut ac porttitor. Lorem ipsum dolor sit amet consectetur. '}</Text>
                </View>
            </ScrollView>

            <View style={{ width: '90%', marginBottom: 20 }}>
                <CTAButton1 title={t('book')} submitHandler={() => { navigation.navigate('CreateBooking') }} />
            </View>

        </View>
    );
};

export default AdFullView;

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

});



