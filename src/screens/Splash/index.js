import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Image, ImageBackground, View, } from 'react-native';
import { _retrieveData } from '../../services/assynsStorage';
import Images from '../../assets/images/index'
import { getCurrentUser } from '../../store/actions/action'
import { useTheme } from '../../../ThemeContext';
import { useFocusEffect } from '@react-navigation/native';

export default function Splash({ navigation }) {
  const dispatch = useDispatch()
  const { theme } = useTheme();

  useFocusEffect(
    useCallback(() => {
      console.log('Screen is focused');
      dispatch(getCurrentUser(navigation))
      return () => {
        console.log('Screen is unfocused');
      };
    }, [])
  );

  return (
    <ImageBackground
      style={styles.background}
      resizeMode="stretch"
      source={theme === 'dark' ? Images.splashBgDM : Images.splashBg}
    >
      <View style={styles.overlay}>
        <Image
          resizeMode="contain"
          style={{ width: 100, height: 100 }}
          source={theme === 'dark' ? Images.LogoDM : Images.Logo}
        />
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
});
