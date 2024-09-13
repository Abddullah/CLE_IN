import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
import { _retrieveData } from '../../services/assynsStorage';
import { GetstartedIcon1 } from '../../assets/icons';
import CTAButton1 from '../../components/CTA_BUTTON1';
import { Typography } from '../../utilities/constants/constant.style';

export default function GetStarted({ navigation }) {

  return (
    <View style={styles.container}>
      <View style={{ flex: 8.5, paddingTop: 20, alignItems: 'center', }}>
        <GetstartedIcon1 height={280} width={280} />
        <View style={styles.text_container}>
          <Text style={Typography.text_heading}>Our services are just a click </Text>
          <Text style={Typography.text_heading}>away from your home</Text>
          <View style={{ marginTop: 40 }}>
            <Text style={Typography.text_paragraph}>Be Clean is a platform that offers you all personal and home care and car cleaning services by approved service providers at the best prices and offers.</Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1.5, justifyContent: 'center', alignItems: 'center', width: '100%', }}>
        <CTAButton1 title={'Get Started'} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    marginHorizontal: '5%',
  },
  text_container: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },

});
