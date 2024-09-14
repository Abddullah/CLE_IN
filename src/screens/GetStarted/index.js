import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
import { Select } from 'native-base';
import { _retrieveData } from '../../services/assynsStorage';
import { GetstartedIcon1, GetstartedIcon2, LanguageIcon, ItalyFlag } from '../../assets/icons';
import CTAButton1 from '../../components/CTA_BUTTON1';
import { Typography } from '../../utilities/constants/constant.style';
import { t } from 'i18next';
import { colors } from '../../utilities/constants';

export default function GetStarted({ navigation }) {
  const [page, setpage] = useState(0);
  const [language, setlanguage] = useState("");

  console.log(page, 'page');

  const submit = () => {
    page === 0 && setpage(1)
    if (page !== 0) {
      setpage(0)
      // navigation.navigate('Login')
    }
  }

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
              <CTAButton1 title={t('getstarted')} submitHandler={() => submit()} />
            </View>
          </View>
        ) : (
          <View style={styles.container}>
            <View style={{ flex: 8.5, paddingTop: 20, width: '100%', justifyContent: 'center', alignItems: 'center', }}>
              <Text style={Typography.text_heading}>{t('personalizeyourexp')}</Text>
              <GetstartedIcon2 height={175} width={175} style={{ marginTop: 30 }} />

              <View style={{ marginTop: 30 }}>
                <View style={styles.list}>
                  <Select
                    bg={colors.Neutral_03}
                    borderWidth={0}
                    selectedValue={language}
                    minWidth="100%"
                    dropdownIcon={<LanguageIcon />}
                    accessibilityLabel="Language"
                    placeholder={"Language"}
                    _selectedItem={{
                      background: colors.Primary_01
                    }}
                    mt={1} onValueChange={itemValue => setlanguage(itemValue)}
                  >
                    <Select.Item label="English" value="en" />
                    <Select.Item label="Czech" value="cz" />
                    <Select.Item label="Urdu" value="ur" />
                  </Select>
                </View>
              </View>

              <View style={[styles.list, { justifyContent: 'space-between' }]}>
                <Text style={{ marginLeft: 10 }}>{t('country')}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ marginRight: 10 }}>{t('italy')}</Text>
                  <ItalyFlag />
                </View>
              </View>

            </View>
            <View style={{ flex: 1.5, justifyContent: 'center', alignItems: 'center', width: '100%', }}>
              <CTAButton1 title={t('getstarted')} submitHandler={() => submit()} />
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
  list: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 7,
    height: 50,
    width: '100%',
    overflow: 'hidden',
    backgroundColor: colors.Neutral_03
  },

});
