
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, Platform, ActivityIndicator } from 'react-native';
import { signIn, showError, } from '../../store/actions/action'
import Images from '../../assets/images'
import { BackIcon } from '../../assets/icons';
import { Typography } from '../../utilities/constants/constant.style';
import { t } from 'i18next';
import CTAButton1 from '../../components/CTA_BUTTON1';
import { LightThemeColors, DarkThemeColors } from '../../utilities/constants';
import { useTheme } from '../../../ThemeContext';

export default function ResetPassword({ navigation }) {
    const dispatch = useDispatch()
    const { theme, toggleTheme } = useTheme();
    const colors = theme === 'dark' ? DarkThemeColors : LightThemeColors;
    const styles = createStyles(colors, theme);

    let isError = useSelector((state) => state.reducer.isError);
    let isLoader = useSelector((state) => state.reducer.isLoader);
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [rePassword, setrePassword] = useState('');
    const [isSelectedRemember, setisSelectedRemember] = useState(false);

    const submit = () => {
        let credentials = {
            email: email,
        }
        navigation.navigate('Signin')
        // dispatch(signIn(credentials, isSelectedRemember, navigation))
        // dispatch(showError())
    }

    return (
        <View style={[styles.mainContainer, { marginTop: Platform.OS === 'ios' ? 50 : 0, }]}>
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

            <View style={{ flex: 8, }}>
                <ScrollView contentContainerStyle={styles.containerC1}>
                    <Text style={[Typography.text_subHeading, { marginTop: 10, color: theme === 'dark' ? colors.black : colors.Primary_01, }]}>{t('changePassword')}</Text>
                    <Text style={[styles.socialTextC1, { width: '100%', justifyContent: 'center', alignItems: 'center' }]}>{t('enteryournewpassword')} </Text>
                    <View style={styles.containerc1_c2}>

                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ top: 3, color: colors.Neutral_01 }}>{t('password')}</Text>
                                {
                                    isError && password == '' && <Text style={{ top: 3, color: colors.Error_Red }}>*</Text>
                                }
                            </View>
                            <View style={styles.inputContiner}>
                                <TextInput
                                    secureTextEntry
                                    style={styles.input}
                                    value={password}
                                    onChangeText={(e) => { setpassword(e) }}
                                    placeholder={t('password')}
                                    placeholderTextColor={colors.Neutral_01}
                                />
                            </View>
                        </View>

                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ top: 3, color: colors.Neutral_01 }}>{t('confirmpassword')}</Text>
                                {
                                    isError && password == '' && <Text style={{ top: 3, color: colors.Error_Red }}>*</Text>
                                }
                            </View>
                            <View style={styles.inputContiner}>
                                <TextInput
                                    secureTextEntry
                                    style={styles.input}
                                    value={rePassword}
                                    onChangeText={(e) => { setrePassword(e) }}
                                    placeholder={t('confirmpassword')}
                                    placeholderTextColor={colors.Neutral_01}
                                />
                            </View>
                        </View>

                        <View style={{ marginTop: 10 }}>
                            <CTAButton1 title={t('save')} submitHandler={() => submit()} />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

const createStyles = (colors, theme) => {
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
            borderColor: colors.Primary_01,
            borderRadius: 5,
            borderWidth: 1,
            marginTop: 10,
        },
        input: {
            height: 50, width: "90%", color: colors.black,
            marginLeft: 7,
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

