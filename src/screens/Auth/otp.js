
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Text, View, Image, Keyboard, TouchableOpacity, Platform, ActivityIndicator } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import SMSVerifyCode from 'react-native-sms-verifycode'
import { signIn, showError, } from '../../store/actions/action'
import Images from '../../assets/images'
import { BackIcon } from '../../assets/icons';
import { Typography } from '../../utilities/constants/constant.style';
import { t } from 'i18next';
import CTAButton1 from '../../components/CTA_BUTTON1';
import SuccessModal from '../../components/Success_Popup';
import { LightThemeColors, DarkThemeColors } from '../../utilities/constants';
import { useTheme } from '../../../ThemeContext';

export default function OtpVerify({ navigation }) {
    const dispatch = useDispatch()
    const { theme, toggleTheme } = useTheme();
    const colors = theme === 'dark' ? DarkThemeColors : LightThemeColors;
    const styles = createStyles(colors, theme);

    let isError = useSelector((state) => state.reducer.isError);
    let isLoader = useSelector((state) => state.reducer.isLoader);
    const [code, setcode] = useState('');
    const [modalVisible, setModalVisible] = useState(false);


    const submit = () => {
        setModalVisible(true)
        let credentials = {
            token: code,
        }
        // dispatch(signIn(credentials, isSelectedRemember, navigation))
        // dispatch(showError())
    }

    const modalClose = () => {
        setModalVisible(false)
        // navigation.navigate('Signin')
    }

    return (
        <View style={[styles.mainContainer, { marginTop: Platform.OS === 'ios' ? 50 : 0, }]}>

            <SuccessModal modalVisible={modalVisible} setModalVisible={() => modalClose()} navigation={navigation} />

            <View style={{ height: 200, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.Primary_01 }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    activeOpacity={.8}
                    style={{ position: 'absolute', left: 20, top: 20 }}
                >
                    <BackIcon />
                </TouchableOpacity>
                <View style={styles.containerc1_c1}>
                    <Image resizeMode='contain' style={{ width: 250, height: 120, }} source={Images.LogoWithText} />
                </View>
            </View>

            <View style={{ flex: 8, width: '90%', marginHorizontal: '5%', justifyContent: 'space-between', }}>
                <View>
                    <Text style={[Typography.text_subHeading, { marginTop: 10, color: theme === 'dark' ? colors.black : colors.Primary_01, }]}>{t('otp')}</Text>
                    <Text style={[styles.socialTextC1, {}]}>{t('enter6digitcode')} </Text>
                    <View style={{ marginTop: 20 }}>
                        <View style={styles.inputContiner}>
                            <SMSVerifyCode
                                codeColor={colors.Neutral_01}
                                containerBackgroundColor={colors.white}
                                // codeViewBorderColor={colors.Neutral_01}
                                focusedCodeViewBorderColor={colors.Primary_01}
                                verifyCodeLength={6}
                                containerPaddingHorizontal={30}
                                onInputChangeText={(e) => { setcode(e) }}
                                onInputCompleted={(e) => { Keyboard.dismiss() }}
                            />
                        </View>
                    </View>
                    <Text style={[Typography.text_subHeading, { marginTop: 30, color: theme === 'dark' ? colors.black : colors.Primary_01, }]}>{'00:54'}</Text>
                    <Text style={[styles.socialTextC1, {}]}>{t('sendagain')} </Text>
                </View>

                <View style={styles.containerc1_c2}>
                    {
                        code.length >= 6 &&
                        <View style={{ marginTop: 10, marginBottom: 10 }}>
                            <CTAButton1 title={t('verify')} submitHandler={() => submit()} />
                        </View>
                    }
                </View>

            </View>
        </View>
    );
}

const createStyles = (colors) => {
    return StyleSheet.create({
        mainContainer: {
            flex: 1,
            backgroundColor: colors.white,
        },
        containerC1: {
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: '10%',
            paddingBottom: 50
        },
        text: {
            fontWeight: '700',
            fontSize: 24,
            lineHeight: 32,
            letterSpacing: -0.3,
            color: colors.black
        },
        label: {
            color: colors.black
        },
        textInputYourEmail: {
            fontWeight: '700',
            fontSize: 16,
            lineHeight: 22,
            letterSpacing: -0.3,
            color: colors.black,
            marginBottom: 50
        },
        containerc1_c1: {
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        containerc1_c2: {
            width: '100%',
        },
        containerc1_c3: {
            width: '100%',
            justifyContent: 'flex-end',
        },
        inputContiner: {
            justifyContent: 'center',
            alignItems: 'center',
        },
        input: {
            height: 50, width: "90%", color: colors.black,
            marginLeft: 7,
            fontWeight: 'bold'
        },
        forget_Password: {
            fontWeight: '400',
            fontSize: 12,
            lineHeight: 16,
            letterSpacing: -0.3,
            color: colors.Primary_01,
            textAlign: 'right',
        },
        socialText: {
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
        },
        socialTextC1: {
            fontSize: 16,
            color: colors.Neutral_01,
            fontWeight: 'normal',
            textAlign: 'center',
        },
        socialIcon: {
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 20,
        },
        iconSize: {
            width: 50,
            height: 50,
        },
        checkboxContainer: {
            marginTop: 5,
            flexDirection: "row",
            alignItems: 'center'
        },
    });
};
