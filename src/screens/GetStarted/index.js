import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Select } from 'native-base';
import { _retrieveData } from '../../services/assynsStorage';
import { GetstartedIcon1, GetstartedIcon2, LanguageIcon, ItalyFlag } from '../../assets/icons';
import CTAButton1 from '../../components/CTA_BUTTON1';
import { Typography } from '../../utilities/constants/constant.style';
import { t } from 'i18next';
import { LightThemeColors, DarkThemeColors } from '../../utilities/constants';
import { useTheme } from '../../../ThemeContext';

export default function GetStarted({ navigation }) {
  const { theme, toggleTheme } = useTheme();
  const colors = theme === 'dark' ? DarkThemeColors : LightThemeColors;
  const styles = createStyles(colors);

  const [page, setpage] = useState(0);
  const [language, setlanguage] = useState("");

  const submit = () => {
    page === 0 && setpage(1)
    if (page !== 0) {
      navigation.navigate('Signin')
    }
  }

  return (
    <>
      {
        (page === 0) ? (
          <View style={styles.container}>
            <View style={{ flex: 8.5, paddingTop: 20, alignItems: 'center', }}>
              <GetstartedIcon1 height={250} width={250} marginTop={'10%'} />
              <View style={styles.text_container}>
                <Text style={[Typography.text_heading, { color: colors.black, }]}>{t('ourservices')}</Text>
                <Text style={[Typography.text_heading, { color: colors.black, }]}>{t('awayfromhome')}</Text>
                <View style={{ marginTop: '5%' }}>
                  <Text style={[Typography.text_paragraph, { color: colors.Neutral_01 }]}>{t('becleanisaplatform')}</Text>
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
              <Text style={[Typography.text_heading, { color: colors.black, }]}>{t('personalizeyourexp')}</Text>
              <GetstartedIcon2 height={175} width={175} style={{ marginTop: 30 }} />

              <View style={{ marginTop: 30 }}>
                <View style={styles.list}>
                  <Select
                    bg={colors.Neutral_03}
                    borderWidth={0}
                    selectedValue={language}
                    minWidth="100%"
                    dropdownIcon={<LanguageIcon />}
                    accessibilityLabel={t('language')}
                    placeholder={t('language')}
                    placeholderTextColor={colors.Neutral_01}
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
                <Text style={{ marginLeft: 10, color: colors.Neutral_01 }}>{t('country')}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ marginRight: 10, color: colors.Neutral_01 }}>{t('italy')}</Text>
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


const createStyles = (colors) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '90%',
      marginHorizontal: '5%',
      backgroundColor: colors.white
    },
    text_container: {
      marginTop: '5%',
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
};

// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { StyleSheet, View, Text, useColorScheme, Button } from 'react-native';
// import { Select } from 'native-base';
// import { _retrieveData } from '../../services/assynsStorage';
// import { GetstartedIcon1, GetstartedIcon2, LanguageIcon, ItalyFlag } from '../../assets/icons';
// // import CTAButton1 from '../../components/CTA_BUTTON1';
// import { Typography } from '../../utilities/constants/constant.style';
// import { t } from 'i18next';
// import { LightThemeColors, DarkThemeColors } from '../../utilities/constants';
// import { useTheme } from '../../../ThemeContext';


// export default function GetStarted({ navigation }) {
//   const { theme, toggleTheme } = useTheme();
//   const colors = theme === 'dark' ? DarkThemeColors : LightThemeColors;
//   console.log(colors, theme, 'colors');

//   return (
//     <>
//       <Button title="Toggle Theme" onPress={toggleTheme} />
//     </>
//   )
// }

// const styles = StyleSheet.create({

// });

