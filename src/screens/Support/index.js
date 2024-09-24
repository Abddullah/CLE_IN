
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ChatBox from '../../components/chatBox';
import CommentInput from '../../components/commentsInput';
import CustomHeader from '../../components/Header';
import { t } from 'i18next';

export default function Support({ ...props }) {
    const navigation = useNavigation();
    return (
        <View style={styles.mainContainer}>
            <CustomHeader
                title={t('settings')}
                isLeft={true}
                leftPress={() => { navigation.goBack() }}
            />
            <View style={styles.body}>
                <ChatBox />
            </View>
            {/* <View style={styles.footer}>
                <CommentInput />
            </View> */}

        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    body: {
        flex: 1,
    },
    footer: {
        paddingVertical: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
