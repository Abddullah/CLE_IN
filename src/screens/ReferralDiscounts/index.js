
import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CustomHeader from '../../components/Header';
import { t } from 'i18next';
import { colors } from '../../utilities/constants';
import { ScrollView } from 'native-base';
import CTAButton1 from '../../components/CTA_BUTTON1';
import CTA_Profile from '../../components/CTA_PROFILE';
import { Typography } from '../../utilities/constants/constant.style';
import { ShareCredit } from '../../assets/icons';

const ReferralDiscounts = ({ navigation }) => {
    let isError = useSelector((state) => state.reducer.isError);

    return (
        <View style={styles.container}>
            <CustomHeader
                title={t('creditCards')}
                isLeft={true}
                leftPress={() => { navigation.goBack() }}
            />
            <ScrollView
                style={{ width: '90%', marginTop: 10 }}
                contentContainerStyle={styles.scrollBar}
                showsVerticalScrollIndicator={false}
            >

                <View style={{ height: 185, width: '100%', padding: 10, borderRadius: 5, justifyContent: 'center', alignItems: 'flex-start', backgroundColor: colors.white }}>
                    <Text style={[Typography.text_CTA1, { color: colors.black, }]}>{t('getfreecredit')}</Text>
                    <Text style={[Typography.text_paragraph, { color: colors.black, textAlign: 'left', marginTop: 10 }]}>{t('sharethebestkepthome')}</Text>
                    <Text style={[Typography.text_CTA1, { color: colors.black, marginTop: 10 }]}>{'tokyo1092371008'}</Text>
                </View>


                <CTA_Profile title={t('Favorites')} icon={<ShareCredit />} submitHandler={() => { }} />



            </ScrollView>

            <View style={{ width: '90%', marginBottom: 20 }}>
                <CTAButton1 title={t('save')} submitHandler={() => { }} />
            </View>

        </View>
    );
};

export default ReferralDiscounts;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollBar: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 50
    },

});


