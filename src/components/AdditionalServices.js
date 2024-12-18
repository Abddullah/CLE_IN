import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from '../../ThemeContext';
import { LightThemeColors, DarkThemeColors } from '../utilities/constants';
import screenResolution from '../utilities/constants/screenResolution';
import { t } from 'i18next';

const AdditionalServices = () => {
  const { theme } = useTheme();
  const colors = theme === 'dark' ? DarkThemeColors : LightThemeColors;
  const styles = createStyles(colors);

  const [services, setServices] = useState([
    { service: t('Oven'), isSelect: false, price: 8 },
    { service: t('Laundry'), isSelect: false, price: 5 },
    { service: t('Fridge'), isSelect: false, price: 10 },
    { service: t('Ironing'), isSelect: false, price: 6 },
    { service: t('Balcony'), isSelect: false, price: 12 },
    { service: t('Cupboard'), isSelect: false, price: 12 },
  ]);

  const toggleCheckbox = (index) => {
    setServices((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, isSelect: !item.isSelect } : item
      )
    );
  };

  const renderServicesInRows = () => {
    const rows = [];
    for (let i = 0; i < services.length; i += 3) {
      rows.push(
        <View key={i} style={styles.rowContainer}>
          {services.slice(i, i + 3).map((service, index) => (
            <View key={service.service} style={styles.optionContainer}>
              <CheckBox
                value={service.isSelect}
                onValueChange={() => toggleCheckbox(i + index)}
                tintColors={{ true: colors.Primary_01, false: colors.Primary_01 }}
              />
              <Text style={styles.optionText}>
                {service.service}
                {/* - ${service.price} */}
              </Text>
            </View>
          ))}
        </View>
      );
    }
    return rows;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{t('additionalService')}</Text>
      {renderServicesInRows()}
    </View>
  );
};

const createStyles = (colors) => {
  return StyleSheet.create({
    container: {
      paddingTop: 25,
    },
    heading: {
      fontSize: RFValue(14, screenResolution.screenHeight),
      fontWeight: 'bold',
      color: colors.black,
      marginBottom: 12,
    },
    rowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 8,
    },
    optionContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
      marginRight: 8,
    },
    optionText: {
      fontSize: RFValue(16, screenResolution.screenHeight),
      color: colors.black,
    },
  });
};

export default AdditionalServices;

