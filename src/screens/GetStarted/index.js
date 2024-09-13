import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
import { _retrieveData } from '../../services/assynsStorage';
import { GetstartedIcon1, GetstartedIcon2 } from '../../assets/icons';
import CTAButton1 from '../../components/CTA_BUTTON1';
import { Typography } from '../../utilities/constants/constant.style';
import { t } from 'i18next';

export default function GetStarted({ navigation }) {
  const [page, setpage] = useState(0);

  console.log(page, 'page');

  return (
    <>
      {
        (page === 0) ? (
          <View style={styles.container}>
            <View style={{ flex: 8.5, paddingTop: 20, alignItems: 'center', }}>
              <GetstartedIcon1 height={280} width={280} />
              <View style={styles.text_container}>
                <Text style={Typography.text_heading}>{t('ourservices')}</Text>
                <Text style={Typography.text_heading}>{t('awayfromhome')}</Text>
                <View style={{ marginTop: 40 }}>
                  <Text style={Typography.text_paragraph}>{t('becleanisaplatform')}</Text>
                </View>
              </View>
            </View>
            <View style={{ flex: 1.5, justifyContent: 'center', alignItems: 'center', width: '100%', }}>
              <CTAButton1 title={'Get Started'} submitHandler={() => setpage(1)} />
            </View>
          </View>
        ) : (
          <View style={styles.container}>
            <View style={{ flex: 8.5, paddingTop: 20, justifyContent: 'center', alignItems: 'center', }}>
              <Text style={Typography.text_heading}>{t('personalizeyourexp')}</Text>
              <GetstartedIcon2 height={175} width={175} style={{ marginTop: 30 }} />
            </View>
            <View style={{ flex: 1.5, justifyContent: 'center', alignItems: 'center', width: '100%', }}>
              <CTAButton1 title={t('getstarted')} submitHandler={() => setpage(1)} />
            </View>
          </View>
        )
      }
    </>
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
