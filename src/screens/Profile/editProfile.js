
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CustomHeader from '../../components/Header';
import { t } from 'i18next';
import Images from '../../assets/images/index'
import { Select } from 'native-base';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import Fontisto from 'react-native-vector-icons/Fontisto';
import CTAButton1 from '../../components/CTA_BUTTON1';
import { LightThemeColors, DarkThemeColors } from '../../utilities/constants';
import { useTheme } from '../../../ThemeContext';

const EditProfile = ({ navigation }) => {
    const { theme, toggleTheme } = useTheme();
    const colors = theme === 'dark' ? DarkThemeColors : LightThemeColors;
    const styles = createStyles(colors, theme);

    let isError = useSelector((state) => state.reducer.isError);
    const [fullName, setfullName] = useState('');
    const [phone, setphone] = useState('');
    const [email, setemail] = useState('');
    // date of birth
    const [date, setDate] = useState(new Date())
    const [openBs, setopenBs] = useState(false)
    const [showBs, setshowBs] = useState(false)
    const [gender, setgender] = useState('');
    const [address, setaddress] = useState('');


    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={toggleTheme}
                style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 50,
                    backgroundColor: 'yellow'
                }} >
                <Text>{'Toggle Theme'}</Text>
            </TouchableOpacity>
            <CustomHeader
                title={t('editProfile')}
                isLeft={true}
                leftPress={() => { navigation.goBack() }}
            />
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

                <View style={{ width: '100%' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ top: 3, color: colors.Neutral_01 }}>{t('fullname')}</Text>
                        {
                            isError && fullName == '' && <Text style={{ top: 3, color: colors.Error_Red }}>*</Text>
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

                <View style={{ width: '100%' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ top: 3, color: colors.Neutral_01 }}>{t('phoneNo')}</Text>
                        {
                            isError && phone == '' && <Text style={{ top: 3, color: colors.Error_Red }}>*</Text>
                        }
                    </View>
                    <View style={styles.inputContiner}>
                        <TextInput
                            keyboardType='number-pad'
                            style={styles.input}
                            value={phone}
                            onChangeText={(e) => { setphone(e) }}
                            placeholder={t('phoneNo')}
                            placeholderTextColor={colors.Neutral_01}
                        />
                    </View>
                </View>

                <View style={{ width: '100%' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ top: 3, color: colors.Neutral_01 }}>{t('email')}</Text>
                        {
                            isError && email == '' && <Text style={{ top: 3, color: colors.Error_Red }}>*</Text>
                        }
                    </View>
                    <View style={styles.inputContiner}>
                        <TextInput
                            keyboardType='number-pad'
                            style={styles.input}
                            value={email}
                            onChangeText={(e) => { setemail(e) }}
                            placeholder={t('email')}
                            placeholderTextColor={colors.Neutral_01}
                        />
                    </View>
                </View>

                <View style={{ width: '100%', marginTop: 10 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[styles.fieldHeading, { color: colors.Neutral_01 }]}>{t('dob')}</Text>
                        {
                            isError && <Text style={{ top: 3, color: "red", top: -1 }}>*</Text>
                        }
                    </View>
                    <View style={styles.list}>
                        <View style={styles.dob}>
                            <TouchableOpacity onPress={() => { setopenBs(true) }}  >
                                {
                                    !showBs && <Text style={[styles.listText, { marginLeft: 10, color: colors.Neutral_01 }]}>{t('selectDate')}</Text>
                                }
                                {
                                    showBs && <Text style={[styles.listText, { marginLeft: 10, color: colors.black }]}>{moment(date).format('DD MM YYYY')}</Text>
                                }
                            </TouchableOpacity>
                            <DatePicker
                                minimumDate={new Date()}
                                mode='date'
                                modal
                                open={openBs}
                                date={date}
                                onConfirm={(date) => {
                                    setopenBs(false)
                                    setDate(date)
                                    setshowBs(true)
                                }}
                                onCancel={() => {
                                    setopenBs(false)
                                    setshowBs(false)
                                }}
                            />
                            <TouchableOpacity onPress={() => { setopenBs(true) }}>
                                <Fontisto name="date" style={styles.listIcon} />
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>


                <View style={{ marginTop: 10 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ top: 3, color: colors.Neutral_01 }}>{t('gender')}</Text>
                        {
                            isError && password == '' && <Text style={{ top: 3, color: colors.Error_Red }}>*</Text>
                        }
                    </View>
                    <View style={styles.list}>
                        <Select
                            bg={colors.white}
                            borderWidth={0}
                            selectedValue={gender}
                            minWidth="100%"
                            accessibilityLabel="Gender"
                            placeholder={t('gender')}
                            placeholderTextColor={colors.Neutral_01}
                            _selectedItem={{
                                background: colors.Primary_01,
                            }}
                            color={colors.Neutral_01}
                            mt={1} onValueChange={itemValue => setgender(itemValue)}
                        >
                            <Select.Item label={t('male')} value="male" />
                            <Select.Item label={t('female')} value="female" />
                        </Select>
                    </View>
                </View>

                <View style={{ width: '100%' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ top: 3, color: colors.Neutral_01 }}>{t('address')}</Text>
                        {
                            isError && phone == '' && <Text style={{ top: 3, color: colors.Error_Red }}>*</Text>
                        }
                    </View>
                    <View style={styles.inputContiner}>
                        <TextInput
                            keyboardType='number-pad'
                            style={styles.input}
                            value={address}
                            onChangeText={(e) => { setaddress(e) }}
                            placeholder={t('address')}
                            placeholderTextColor={colors.Neutral_01}
                        />
                    </View>
                </View>

                <View style={{ width: '100%', marginTop: 50 }}>
                    <CTAButton1 title={t('SAVE')} />
                </View>
            </ScrollView >

        </View >
    );
};

export default EditProfile;

const createStyles = (colors, theme) => {
    return StyleSheet.create({
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
            borderColor: colors.White_Primary_01,
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
            borderRadius: 5,
            height: 50,
            overflow: 'hidden',
            backgroundColor: colors.white,
            borderColor: colors.Primary_01,
            borderWidth: 1,

        },
        fieldHeading: {
            marginLeft: '1%',
            // fontSize: 12,
            color: 'black',
        },
        inputContiner: {
            paddingLeft: 10,
            backgroundColor: colors.white,
            borderColor: colors.Primary_01,
            borderRadius: 5,
            borderWidth: 1,
            marginTop: 10,
        },
        listIcon: {
            fontSize: 18,
            marginRight: 15,
            color: colors.Neutral_01
            // color: colors.Primary_01
        },
        dob: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%'
        },
        input: {
            height: 50, width: "90%", color: colors.black,
            marginLeft: 7,
        }

    });
};

