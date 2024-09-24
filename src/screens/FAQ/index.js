
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CustomHeader from '../../components/Header';
import { t } from 'i18next';
import { colors } from '../../utilities/constants';
import { Typography } from '../../utilities/constants/constant.style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CTA_Profile from '../../components/CTA_PROFILE';

const FAQ = ({ navigation }) => {
    let isError = useSelector((state) => state.reducer.isError);
    const [search, setsearch] = useState('');

    return (
        <View style={styles.container}>
            <CustomHeader
                title={t('fAQ')}
                isLeft={true}
                leftPress={() => { navigation.goBack() }}
            />
            <View style={styles.boxContainer}>
                <View style={{ width: '100%', }}>
                    <View style={styles.inputContiner}>
                        <AntDesign name="search1" style={{ fontSize: 20, color: colors.Primary_01, }} />
                        <TextInput
                            keyboardType='number-pad'
                            style={styles.input}
                            value={search}
                            onChangeText={(e) => { setsearch(e) }}
                            placeholder={t('search')}
                            placeholderTextColor={colors.Neutral_01}
                        />
                    </View>
                    <CTA_Profile title={t('howdoibookacleaning')} icon={null} submitHandler={() => { }} />
                    <CTA_Profile title={t('howdoipayforthe')} icon={null} submitHandler={() => { }} />
                    <CTA_Profile title={t('howdoicontact')} icon={null} submitHandler={() => { }} />
                </View>
            </View>
        </View>
    );
};

export default FAQ;

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
    inputContiner: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 10,
        backgroundColor: colors.white,
        borderColor: colors.Primary_01,
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 10,
    },

});


