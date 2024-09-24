
import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CustomHeader from '../../components/Header';
import { t } from 'i18next';
import { colors } from '../../utilities/constants';

const TermsAndCondition = ({ navigation }) => {
    let isError = useSelector((state) => state.reducer.isError);

    return (
        <View style={styles.container}>
            <CustomHeader
                title={t('TermsConditions')}
                isLeft={true}
                leftPress={() => { navigation.goBack() }}
            />


            <ScrollView
                style={{ width: '90%' }}
                contentContainerStyle={styles.scrollBar}
                showsVerticalScrollIndicator={false}
            >



            </ScrollView>

        </View>
    );
};

export default TermsAndCondition;

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


