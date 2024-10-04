
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Linking } from 'react-native';
import { CallIcon, MsgIcon } from '../assets/icons';
import { Typography } from '../utilities/constants/constant.style';
import images from '../assets/images';
import { useNavigation } from '@react-navigation/native';
import { LightThemeColors, DarkThemeColors } from '../utilities/constants';
import { useTheme } from '../../ThemeContext';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import { Center } from 'native-base';
import CTAButton1 from './CTA_BUTTON1';
import { t } from 'i18next';
import CTAButton2 from './CTA_BUTTON2';

const BookingCardProvider = ({
    data,
    submitHandler,
}) => {
    const navigation = useNavigation();
    const { theme } = useTheme();
    const colors = theme === 'dark' ? DarkThemeColors : LightThemeColors;
    const styles = createStyles(colors, theme);

    return (
        <TouchableOpacity
            activeOpacity={.8}
            style={styles.container}
            onPress={() => { submitHandler() }}
        >
            <View style={styles.container_C1}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Image
                        resizeMode="cover"
                        style={{ width: 40, height: 40, borderRadius: 10 }}
                        source={images.profilePic1}
                    />
                    <Text style={[Typography.text_CTA1, { color: colors.black, fontWeight: 'normal', marginLeft: 10 }]}>{'Kim David'}</Text>

                </View>

                <View style={styles.statusButton}>
                    <Text style={[Typography.text_CTA1, { color: colors.White_Primary_01, fontWeight: 'normal' }]}>{'Completed'}</Text>
                </View>
            </View>
            <View style={styles.container_C2}>
                <View style={styles.container_C2_C1}>
                    <Image
                        resizeMode="cover"
                        style={{ width: 88, height: 88, borderRadius: 10 }}
                        source={images.cleaning}
                    />
                </View>
                <View style={styles.container_C2_C2}>
                    <Text style={[Typography.text_CTA1, { color: colors.black, fontWeight: 'bold', marginLeft: 10 }]}>{'Cleaning at Home'}</Text>
                    <Text style={[Typography.text_paragraph, { marginLeft: 10, marginTop: 5, textAlign: 'left', color: colors.black, }]}>{"We specialize in delivering top-quality house cleaning services, ensuring every corner is spotless. Our team is committed to using 100% effort and care in every task, from dusting and vacuuming to deep cleaning kitchens and bathrooms.".substring(0, 70) + '...'}</Text>
                </View>
                <View style={styles.container_C2_C1}>
                    <Text style={[Typography.text_CTA1, { color: colors.White_Primary_01, fontWeight: 'bold' }]}>{'$450'}</Text>
                    <View style={styles.callMsgButtons}>
                        <TouchableOpacity activeOpacity={.8} onPress={() => Linking.openURL(`tel:${+923450558623}`)}>
                            <CallIcon />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={.8} onPress={() => { navigation.navigate('Chat') }}>
                            <MsgIcon />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={[styles.container_C2, { height: 150 }]}>
                <View style={styles.container_C2_C2}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: 10, width: '100%', }}>
                        <View style={styles.centerStyle}>
                            <Fontisto name="date" style={{ fontSize: 18, color: colors.White_Primary_01, marginLeft: 10, }} />
                            <Text style={[Typography.text_CTA1, styles.dateTime]}>{'12 Jan, 2024'}</Text>
                        </View>
                        <View style={[styles.centerStyle, { marginLeft: 20 }]}>
                            <Entypo name="back-in-time" style={{ fontSize: 18, color: colors.White_Primary_01, marginLeft: 10, }} />
                            <Text style={[Typography.text_CTA1, styles.dateTime]}>{'12 Jan, 2024'}</Text>
                        </View>
                    </View>

                    <View style={[styles.centerStyle, { marginTop: 10, }]}>
                        <FontAwesome5 name="map-marker-alt" style={{ fontSize: 20, color: colors.White_Primary_01, marginLeft: 10 }} />
                        <Text style={[Typography.text_CTA1, styles.dateTime]}>{'3 W. Peachtree St.Schererville, IN 46375'}</Text>
                    </View>

                    <TouchableOpacity
                        activeOpacity={.8}
                        style={[styles.centerStyle, { marginTop: 10 }]}
                    >
                        <FontAwesome5 name="info-circle" style={{ fontSize: 18, color: colors.White_Primary_01, marginLeft: 10 }} />
                        <Text style={[Typography.text_CTA1, styles.dateTime]}>{t('customerInfo')}</Text>
                    </TouchableOpacity>

                    <View style={[styles.centerStyle, { marginTop: 10, marginBottom: 10, width: '100%', justifyContent: 'space-around', }]}>
                        <View style={{ width: '48%' }}>
                            <CTAButton1 title={t('accept')} />
                        </View>
                        <View style={{ width: '48%' }}>
                            <CTAButton2 title={t('cancel')} />
                        </View>
                    </View>


                </View>
            </View>
        </TouchableOpacity>
    );
};

export default BookingCardProvider;

const createStyles = (colors, theme) => {
    return StyleSheet.create({
        container: {
            width: '100%',
            height: 350,
            borderRadius: 15,
            marginTop: 10,
            overflow: 'hidden',
            justifyContent: 'flex-start',
            alignItems: 'center',
            borderWidth: theme === 'dark' ? .5 : 0,
            borderColor: colors.Neutral_01,
            backgroundColor: colors.white,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        },
        container_C1: {
            width: '95%',
            height: 58,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottomColor: colors.Neutral_02,
            borderBottomWidth: .8,
        },
        container_C2: {
            width: '95%',
            height: 122,
            borderRadius: 15,
            overflow: 'hidden',
            flexDirection: 'row',
        },
        statusButton: {
            width: 100,
            height: 28,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: colors.Primary_01,
            borderWidth: 1,
            borderRadius: 10
        },
        container_C2_C1: {
            flex: 1, justifyContent: 'center', alignItems: 'center',
        },
        container_C2_C2: {
            flex: 2,
            justifyContent: 'center',
            alignItems: 'flex-start',
        },
        callMsgButtons: {
            marginTop: 10,
            width: '100%',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            flexDirection: 'row'
        },
        centerStyle: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        dateTime: {
            color: colors.black,
            fontWeight: 'bold',
            marginLeft: 10
        }

    });
};
