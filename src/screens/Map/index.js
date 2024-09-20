import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Image, ImageBackground, View, Text } from 'react-native';
import { _retrieveData } from '../../services/assynsStorage';
import Images from '../../assets/images/index'
import { Logo, GoogleIcon } from '../../assets/icons';
import { getCurrentUser } from '../../store/actions/action'
import { t } from 'i18next';

export default function Map({ navigation }) {
    const dispatch = useDispatch()

    return (
        <ImageBackground
            style={styles.background}
            resizeMode="cover"
            source={Images.mapWhite}
        >
        
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
   
});
