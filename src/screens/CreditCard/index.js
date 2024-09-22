
import React, { useState } from 'react';
import { StyleSheet, View, } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CustomHeader from '../../components/Header';
import { t } from 'i18next';
import { colors } from '../../utilities/constants';
import { ScrollView } from 'native-base';
import { Nocard } from '../../assets/icons';
import CTAButton1 from '../../components/CTA_BUTTON1';

const CreditCard = ({ navigation }) => {
    let isError = useSelector((state) => state.reducer.isError);

    return (
        <View style={styles.container}>
            <CustomHeader
                title={t('creditCards')}
                isLeft={true}
                leftPress={() => { navigation.goBack() }}
            />
            <ScrollView
                style={{ width: '90%' }}
                contentContainerStyle={styles.scrollBar}
                showsVerticalScrollIndicator={false}
            >
                <Nocard style={{ marginTop: 100 }} />
            </ScrollView>

            <View style={{ width: '90%', marginBottom: 20 }}>
                <CTAButton1 title={t('addanewcard')} submitHandler={() => { navigation.navigate('AddNewCard') }} />
            </View>

        </View>
    );
};

export default CreditCard;

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


