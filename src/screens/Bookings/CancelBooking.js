import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CustomHeader from '../../components/Header';
import { t } from 'i18next';
import { colors } from '../../utilities/constants';
import { Typography } from '../../utilities/constants/constant.style';
import CTAButton1 from '../../components/CTA_BUTTON1';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SuccessModalBooking from '../../components/Booking_Success_Popup';
import RadioButton from '../../components/Radio_Button';

const CancelBooking = ({ navigation }) => {
    let isError = useSelector((state) => state.reducer.isError);
    const [reason, setreason] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const options = [
        { label: t('schedulechange'), value: 'Schedule change' },
        { label: t('weatherconditions'), value: 'Weather conditions' },
        { label: t('Ihavealternativeoption'), value: 'I have alternative options' },
        { label: t('others'), value: 'Others' },
    ];
    const [cancelledReason, setcancelledReason] = useState('');

    const handleSelect = (value) => {
        setcancelledReason(value)
    };

    return (
        <View style={styles.container}>
            <SuccessModalBooking modalVisible={modalVisible} setModalVisible={() => { setModalVisible(false); navigation.navigate('Home') }} navigation={navigation} isCancel={true} />
            <CustomHeader
                title={t('cancelbooking')}
                isLeft={true}
                leftPress={() => { navigation.goBack() }}
            />
            <View style={styles.body}>


                <View style={{ width: '90%', marginTop: 20 }}>
                    <Text style={[Typography.text_CTA1, { color: colors.Neutral_01, textAlign: 'left', marginBottom: 10 }]}>{t('pleaseselectthereason')}</Text>
                    <RadioButton options={options} onSelect={handleSelect} />
                    {
                        cancelledReason === 'Others' &&
                        <>
                            <View style={styles.heading}>
                                <Text style={[Typography.text_paragraph_1, styles.headingText]}>{t('others')}</Text>
                            </View>
                            <View style={styles.textAreaContainer}>
                                <TextInput
                                    keyboardType="default"
                                    style={{ height: '100%', width: '100%', textAlignVertical: 'top' }}
                                    value={reason}
                                    onChangeText={(e) => { setreason(e) }}
                                    placeholder={t('enteryourreason')}
                                    placeholderTextColor={colors.Neutral_01}
                                    multiline={true}
                                />
                            </View>
                        </>
                    }
                </View>
            </View>
            <View style={styles.footer}>
                <View style={{ width: '90%', }}>
                    <CTAButton1 title={t('cancelbooking')} submitHandler={() => { setModalVisible(true); }} />
                </View>
            </View>
        </View>
    );
};


export default CancelBooking;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    body: {
        flex: 10,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    footer: {
        // flex: 2,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    heading: {
        width: '100%',
        marginTop: 10,
    },
    textAreaContainer: {
        marginTop: 10,
        height: 185,
        width: '100%',
        borderRadius: 5,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: colors.white,
        borderColor: colors.Primary_01,
        borderWidth: 1
    },
    headingText: {
        fontWeight: 'bold',
        color: colors.black,
        textAlign: 'left'
    },
});



