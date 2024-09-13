import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Image, ImageBackground, View, Text } from 'react-native';
import { _retrieveData } from '../../services/assynsStorage';
import Images from '../../assets/images/index'
import { Logo, GoogleIcon } from '../../assets/icons';
import { getCurrentUser } from '../../store/actions/action'
import { t } from 'i18next';

export default function Splash({ navigation }) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrentUser(navigation))
  }, []);

  return (
    <ImageBackground
      style={styles.background}
      resizeMode="stretch"
      source={Images.splashBg}
    >
      <View style={styles.overlay}>
        <Image
          resizeMode="contain"
          style={{ width: 100, height: 100 }}
          source={Images.Logo}
        />
        {/* <GoogleIcon /> */}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    padding: 20,
    borderRadius: 10,
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
