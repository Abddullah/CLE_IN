
import React, { useState } from 'react';
import { StyleSheet, View, Text, Switch, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CustomHeader from '../../components/Header';
import { t } from 'i18next';
import { colors } from '../../utilities/constants';
import { Typography } from '../../utilities/constants/constant.style';
import CTA_Setting from '../../components/CTA_SETTINGS';
import { Select } from 'native-base';
import { Heart, } from '../../assets/icons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Settings = ({ navigation }) => {
    let isError = useSelector((state) => state.reducer.isError);
    const [language, setLanguage] = useState('');
    const [darkMode, setdarkMode] = useState(false);

    return (
        <View style={styles.container}>
            <CustomHeader
                title={t('settings')}
                isLeft={true}
                leftPress={() => { navigation.goBack() }}
            />

            <ScrollView
                style={{ width: '90%' }}
                contentContainerStyle={styles.scrollBar}
                showsVerticalScrollIndicator={false}
            >
                <View style={[styles.list, { marginTop: 30 }]}>
                    <Select
                        bg="white"
                        borderWidth={0}
                        selectedValue={language}
                        minWidth="100%"
                        accessibilityLabel="Language"
                        placeholder="Language"
                        placeholderTextColor="black"
                        _selectedItem={{
                            background: colors.Primary_01
                        }}
                        mt={1}
                        onValueChange={itemValue => setLanguage(itemValue)}
                    >
                        <Select.Item label="Language (ENGLISH)" value="en" />
                        <Select.Item label="Language (Czech)" value="cz" />
                        <Select.Item label="Language (Urdu)" value="ur" />
                    </Select>
                </View>

                <View style={styles.list}>
                    <Text style={[Typography.text_paragraph_1, { marginLeft: 10, color: colors.black, fontSize: 13 }]}>{darkMode ? 'Theme (Dark Mode)' : 'Theme (Normal)'}</Text>
                    <Switch
                        trackColor={{ false: '#3e3e3e', true: '#3e3e3e' }}
                        thumbColor={darkMode ? colors.Primary_01 : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => { setdarkMode(!darkMode) }}
                        value={darkMode}
                    />
                </View>

                <CTA_Setting title={t('privacyPolicy')} icon={<AntDesign name="caretright" />} submitHandler={() => { navigation.navigate('PrivacyPolicy') }} />
                <CTA_Setting title={t('TermsConditions')} icon={<AntDesign name="caretright" />} submitHandler={() => { navigation.navigate('TermsAndCondition') }} />
                <CTA_Setting title={t('feedback')} icon={<AntDesign name="caretright" />} submitHandler={() => { navigation.navigate('Feedback') }} />
                <CTA_Setting title={t('supportandhelp')} icon={<AntDesign name="caretright" />} submitHandler={() => { navigation.navigate('Support') }} />
                <CTA_Setting title={t('deletemyaccount')} icon={<AntDesign name="caretright" />} submitHandler={() => { navigation.navigate('DeleteAccount') }} />

            </ScrollView>

        </View>
    );
};

export default Settings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxContainer: {
        flex: 1,
        width: '90%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        marginTop: 10,
    },
    box: {
        marginTop: 10,
        height: 44,
        width: 106,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.Primary_03
    },
    list: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        width: '100%',
        // borderColor: colors.Primary_01,
        // borderWidth: 1,
        borderRadius: 5,
        height: 50,
        overflow: 'hidden',
        backgroundColor: colors.white
    },
    scrollBar: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 50
    },

});


