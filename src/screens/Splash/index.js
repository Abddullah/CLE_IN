import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Image, ImageBackground, View, Button } from 'react-native';
import { _retrieveData } from '../../services/assynsStorage';
import Images from '../../assets/images/index'
import { getCurrentUser } from '../../store/actions/action'
import { useTheme } from '../../../ThemeContext';

export default function Splash({ navigation }) {
  const dispatch = useDispatch()
  const { theme } = useTheme();

  useEffect(() => {
    dispatch(getCurrentUser(navigation))
  }, []);

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
