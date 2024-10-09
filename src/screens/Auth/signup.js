
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, Platform, ActivityIndicator } from 'react-native';
import { signIn, showError, } from '../../store/actions/action'
import Images from '../../assets/images'
import { GoogleIcon, AppleIcon, BackIcon } from '../../assets/icons';
import CheckBox from '@react-native-community/checkbox';
import { Select } from 'native-base';
import { Typography } from '../../utilities/constants/constant.style';
import { t } from 'i18next';
import CTAButton1 from '../../components/CTA_BUTTON1';
import { LightThemeColors, DarkThemeColors } from '../../utilities/constants';
import { useTheme } from '../../../ThemeContext';

export default function Signup({ navigation }) {
    const dispatch = useDispatch()
    const { theme, toggleTheme } = useTheme();
    const colors = theme === 'dark' ? DarkThemeColors : LightThemeColors;
    const styles = createStyles(colors, theme);

    let isError = useSelector((state) => state.reducer.isError);
    let isLoader = useSelector((state) => state.reducer.isLoader);

    const [fullName, setfullName] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [rePassword, setrePassword] = useState('');
    const [role, setrole] = useState('');
    const [isSelectedTerm, setisSelectedTerm] = useState(false);


    const submit = () => {
        let credentials = {
            email: email,
            password: password,
        }
        navigation.navigate('OtpVerify')
        // dispatch(signIn(credentials, isSelectedRemember, navigation))
        // dispatch(showError())
    }

    return (
        <View style={[styles.mainContainer, { marginTop: Platform.OS === 'ios' ? 50 : 0, }]}>

            <View style={{ height: 200, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.Primary_01 }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Signin')}
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
                    <Text style={[Typography.text_subHeading, { marginTop: 10, color: theme === 'dark' ? colors.black : colors.Primary_01 }]}>{t('pleaseRegisterHere')}</Text>
                    <View style={styles.containerc1_c2}>
                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ top: 3, color: colors.Neutral_01 }}>{t('fullname')}</Text>
                                {
                                    isError && email == '' && <Text style={{ top: 3, color: colors.Error_Red }}>*</Text>
                                }
                            </View>
                            <View style={styles.inputContiner}>
                                <TextInput
                                    style={styles.input}
                                    value={fullName}
                                    onChangeText={(e) => { setfullName(e) }}
                                    placeholder={t('fullname')}
                                    placeholderTextColor={colors.Neutral_01}
                                />
                            </View>
                        </View>

                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ top: 3, color: colors.Neutral_01 }}>{t('emailAddress')}</Text>
                                {
                                    isError && email == '' && <Text style={{ top: 3, color: colors.Error_Red }}>*</Text>
                                }
                            </View>
                            <View style={styles.inputContiner}>
                                <TextInput
                                    style={styles.input}
                                    value={email}
                                    onChangeText={(e) => { setemail(e) }}
                                    placeholder={t('email')}
                                    placeholderTextColor={colors.Neutral_01}
                                />
                            </View>
                        </View>

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
                            < View style={{ flexDirection: 'row' }}>
                                <Text style={{ top: 3, color: colors.Neutral_01 }}>{t('role')}</Text>
                                {
                                    isError && password == '' && <Text style={{ top: 3, color: colors.Error_Red }}>*</Text>
                                }
                            </View>
                            <View style={styles.list}>
                                <Select
                                    bg={colors.white}
                                    borderWidth={0}
                                    selectedValue={role}
                                    minWidth="100%"
                                    accessibilityLabel="User"
                                    placeholder="User"
                                    placeholderTextColor={colors.Neutral_01}
                                    _selectedItem={{
                                        background: colors.Primary_01,
                                    }}
                                    color={colors.Neutral_01}
                                    mt={1} onValueChange={itemValue => setrole(itemValue)}
                                >
                                    <Select.Item label="User" value="User" />
                                    <Select.Item label="Provider" value="Provider" />
                                </Select>
                            </View>
                        </View>

                        <View style={[styles.checkboxContainer, { marginTop: 10 }]}>
                            <CheckBox
                                tintColors={{
                                    true: theme === 'dark' ? colors.Neutral_01 : colors.Primary_01,
                                    false: colors.Neutral_01,
                                }}
                                disabled={false}
                                value={isSelectedTerm}
                                onValueChange={setisSelectedTerm}
                            />
                            <View style={[styles.checkboxContainer, { flexWrap: 'wrap' }]}>
                                {/* <Text style={styles.label}>{t('')}</Text> */}
                                <Text style={styles.label}>{t('iagreeto')}</Text>
                                <TouchableOpacity
                                // onPress={() => navigation.navigate('TermsAndCondition')}
                                >
                                    <Text style={[styles.label, { textDecorationLine: 'underline' }]}>{t('TermsConditions') + ' '}</Text>
                                </TouchableOpacity>
                                <Text style={styles.label}>{t('and1') } </Text>
                                <TouchableOpacity
                                // onPress={() => navigation.navigate('PrivacyPolicy')}
                                >
                                    <Text style={[styles.label, { textDecorationLine: 'underline' }]}>{t('privacyPolicy')}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <CTAButton1 title={t('signup')} submitHandler={() => submit()} />
                        </View>
                    </View>

                    <View style={styles.containerc1_c3}>
                        <TouchableOpacity style={styles.socialText}
                            onPress={() => navigation.navigate('Signin')}
                        >
                            <Text style={[styles.socialTextC1, {}]}>{t('alreadyhaveanaccount')} </Text>
                            <Text style={[styles.socialTextC1, { color: theme === 'dark' ? colors.black : colors.Primary_01, fontWeight: 'bold' }]}> {t('signIn')}</Text>
                        </TouchableOpacity>
                        <Text style={[styles.socialTextC1, { color: colors.Primary_01, fontWeight: 'bold' }]}>{t('or')}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                            <GoogleIcon />
                            <AppleIcon marginLeft={10} />
                        </View>
                    </View>
                </ScrollView>
            </View >
        </View >
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
            paddingLeft: 10,
            backgroundColor: colors.white,
            borderColor: colors.Primary_01,
            borderRadius: 5,
            borderWidth: 1,
            marginTop: 10,
        },
        input: {
            height: 50, width: "90%", color: colors.black,
            marginLeft: 7,
            // fontWeight: 'bold'
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
            lineHeight: 38,
            letterSpacing: -0.3,
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
            flexDirection: "row",
            alignItems: 'center'
        },
        list: {
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
            borderColor: colors.Primary_01,
            borderWidth: 1,
            borderRadius: 7,
            height: 50,
            overflow: 'hidden',
            backgroundColor: colors.white
        },
    });
};
