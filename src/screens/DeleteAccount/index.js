
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../../components/Header';
import { t } from 'i18next';
import { Typography } from '../../utilities/constants/constant.style';
import { colors } from '../../utilities/constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import CheckBox from '@react-native-community/checkbox';
import CTA_Profile from '../../components/CTA_PROFILE';
import CTAButton1 from '../../components/CTA_BUTTON1';

export default function DeleteAccount({ ...props }) {
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
                        <Ionicons name="key-outline" style={{ fontSize: 20, color: colors.Primary_01, }} />
                        <TextInput
                            keyboardType='number-pad'
                            style={{ marginLeft: 10, width: '80%', }}
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
                            <Feather name={secureEntryState ? 'eye' : 'eye-off'} style={{ fontSize: 20, color: colors.Primary_01, marginLeft: 10, }} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={[styles.checkboxContainer, { marginTop: 10 }]}>
                    <CheckBox
                        tintColors={{
                            true: colors.Primary_01,
                            false: colors.Neutral_01,
                        }}
                        disabled={false}
                        value={isSelectedTerm}
                        onValueChange={setisSelectedTerm}
                    />
                    <View style={styles.checkboxContainer}>
                        <Text style={styles.label}>{t('iagreeto')}</Text>
                        <TouchableOpacity
                        // onPress={() => navigation.navigate('TermsAndCondition')}
                        >
                            <Text style={[styles.label, { textDecorationLine: 'underline' }]}>{t('TermsConditions')}</Text>
                        </TouchableOpacity>
                        <Text style={styles.label}>{t('and1')} </Text>
                        <TouchableOpacity
                        // onPress={() => navigation.navigate('PrivacyPolicy')}
                        >
                            <Text style={[styles.label, { textDecorationLine: 'underline' }]}>{t('privacyPolicy')}</Text>
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

const styles = StyleSheet.create({
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
