
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../../components/Header';
import { t } from 'i18next';
import { Typography } from '../../utilities/constants/constant.style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import CheckBox from '@react-native-community/checkbox';
import CTAButton1 from '../../components/CTA_BUTTON1';
import { LightThemeColors, DarkThemeColors } from '../../utilities/constants';
import { useTheme } from '../../../ThemeContext';

export default function DeleteAccount({ ...props }) {
    const { theme, toggleTheme } = useTheme();
    const colors = theme === 'dark' ? DarkThemeColors : LightThemeColors;
    const styles = createStyles(colors, theme);

    const navigation = useNavigation();
    const [password, setpassword] = useState('');
    const [secureEntryState, setsecureEntryState] = useState(false);
    const [isSelectedTerm, setisSelectedTerm] = useState(false);

    return (
        <View style={styles.mainContainer}>
            <CustomHeader
                title={t('deleteacount')}
                isLeft={true}
                leftPress={() => { navigation.goBack() }}
            />
            <View style={styles.body}>
                <Text style={[Typography.text_paragraph_1, { textAlign: 'left', color: colors.black, fontSize: 14 }]}>{t('areyousureyouwant')}</Text>

                <Text style={{ marginTop: 15 }}>
                    <Text style={[Typography.text_paragraph_1, { textAlign: 'left', color: colors.black, fontSize: 14, fontWeight: 'bold' }]}>{t('warning')}</Text>
                    <Text style={[Typography.text_paragraph_1, { textAlign: 'left', color: colors.black, fontSize: 14, }]}>{' ' + t('deleting')}</Text>
                </Text>

                <Text style={{ marginTop: 15, marginLeft: 30 }}>
                    <Text style={[Typography.text_paragraph_1, { textAlign: 'left', color: colors.black, fontSize: 14, fontWeight: 'bold' }]}>{t('*')}</Text>
                    <Text style={[Typography.text_paragraph_1, { textAlign: 'left', color: colors.black, fontSize: 14, }]}>{' ' + t('bookingHistory')}</Text>
                </Text>

                <Text style={{ marginTop: 15, marginLeft: 30 }}>
                    <Text style={[Typography.text_paragraph_1, { textAlign: 'left', color: colors.black, fontSize: 14, fontWeight: 'bold' }]}>{t('*')}</Text>
                    <Text style={[Typography.text_paragraph_1, { textAlign: 'left', color: colors.black, fontSize: 14, }]}>{' ' + t('savedpayment')}</Text>
                </Text>

                <Text style={{ marginTop: 15, marginLeft: 30 }}>
                    <Text style={[Typography.text_paragraph_1, { textAlign: 'left', color: colors.black, fontSize: 14, fontWeight: 'bold' }]}>{t('*')}</Text>
                    <Text style={[Typography.text_paragraph_1, { textAlign: 'left', color: colors.black, fontSize: 14, }]}>{' ' + t('personalPrefrences')}</Text>
                </Text>

                <Text style={[Typography.text_paragraph_1, { marginTop: 15, textAlign: 'left', color: colors.black, fontSize: 14 }]}>{t('todeleteyouraccount')}</Text>
                <Text style={[Typography.text_paragraph_1, { marginTop: 15, textAlign: 'left', color: colors.black, fontSize: 14, fontWeight: 'bold' }]}>{t('password')}</Text>

                <View style={{ width: '100%', marginTop: 10, }}>
                    <View style={styles.inputContiner}>
                        <Ionicons name="key-outline" style={{ fontSize: 20, color: colors.White_Primary_01, }} />
                        <TextInput
                            keyboardType='number-pad'
                            style={{ marginLeft: 10, width: '80%', color: colors.black }}
                            secureTextEntry={secureEntryState}
                            value={password}
                            onChangeText={(e) => { setpassword(e) }}
                            placeholder={t('enterpassword')}
                            placeholderTextColor={colors.Neutral_01}
                        />
                        <TouchableOpacity
                            activeOpacity={.8}
                            onPress={() => { setsecureEntryState(!secureEntryState) }}
                        >
                            <Feather name={secureEntryState ? 'eye' : 'eye-off'} style={{ fontSize: 20, color: colors.White_Primary_01, marginLeft: 10, }} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={[styles.checkboxContainer, { marginTop: 10 }]}>
                    <CheckBox
                        tintColors={{
                            true: colors.White_Primary_01,
                            false: colors.Neutral_01,
                        }}
                        disabled={false}
                        value={isSelectedTerm}
                        onValueChange={setisSelectedTerm}
                    />
                    <View style={styles.checkboxContainer}>
                        <Text style={{ color: colors.black }}>{t('iagreeto') + ' '}</Text>
                        <TouchableOpacity
                        // onPress={() => navigation.navigate('TermsAndCondition')}
                        >
                            <Text style={{ textDecorationLine: 'underline', color: colors.black }}>{t('TermsConditions') + ' '}</Text>
                        </TouchableOpacity>
                        <Text style={{ color: colors.black }}>{t('and1')} </Text>
                        <TouchableOpacity
                        // onPress={() => navigation.navigate('PrivacyPolicy')}
                        >
                            <Text style={{ textDecorationLine: 'underline', color: colors.black }}>{t('privacyPolicy')}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ width: '100%', marginTop: 20 }}>
                    <CTAButton1 title={t('delete')} submitHandler={() => { }} />
                </View>

            </View>
        </View>
    );
}

const createStyles = (colors, theme) => {
    return StyleSheet.create({
        mainContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        body: {
            flex: 1,
            width: '90%',
            marginTop: 10
        },
        inputContiner: {
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'row',
            paddingLeft: 10,
            backgroundColor: colors.white,
            borderColor: colors.Primary_01,
            borderRadius: 5,
            borderWidth: 1,
        },
        checkboxContainer: {
            flexDirection: "row",
            alignItems: 'center'
        },
    });
};