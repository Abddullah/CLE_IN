
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Switch, Image, ScrollView } from 'react-native';
import CustomHeader from '../../components/Header';
import { t } from 'i18next';
import { colors } from '../../utilities/constants';
import { Typography } from '../../utilities/constants/constant.style';
import Images from '../../assets/images/index'
import CTAButton1 from '../../components/CTA_BUTTON1';
import CTA_Profile from '../../components/CTA_PROFILE';
import { Heart, Payment, Referral, Preferences, FAQ, Settings } from '../../assets/icons';
import { Select } from 'native-base';

const Profile = ({ navigation }) => {
    const [language, setLanguage] = useState('');
    const [darkMode, setdarkMode] = useState(false);


    return (
        <View style={styles.container}>
            <CustomHeader title={t('Profile')} />
            <ScrollView
                style={{ width: '90%' }}
                contentContainerStyle={styles.scrollBar}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.profilePhoto}>
                    <Image
                        resizeMode="contain"
                        style={{ borderRadius: 100, width: 127, height: 127 }}
                        source={Images.profilePic}
                    />
                </View>

                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                    <Text style={Typography.text_heading}>Jenny Abbas</Text>
                    <Text style={Typography.text_paragraph_1}> +61 588 74637</Text>
                    <View style={{ marginTop: 10, width: '60%', }}>
                        <CTAButton1 title={t('editProfile')} submitHandler={() => { navigation.navigate('EditProfile') }} />
                    </View>
                </View>

                <View style={styles.list}>
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

                <CTA_Profile title={t('Favorites')} icon={<Heart />} />
                <CTA_Profile title={t('paymentMethod')} icon={<Payment />} />
                <CTA_Profile title={t('referralDiscounts')} icon={<Referral />} />
                <CTA_Profile title={t('preferences')} icon={<Preferences />} />
                <CTA_Profile title={t('fAQ')} icon={<FAQ />} />
                <CTA_Profile title={t('settings')} icon={<Settings />} />

            </ScrollView>

        </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profilePhoto: {
        height: 130, width: 130,
        marginTop: 10,
        justifyContent: 'center', alignItems: 'center',
        borderRadius: 100,
        borderWidth: 2,
        borderColor: colors.Primary_01,
    },
    scrollBar: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 50
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

});


