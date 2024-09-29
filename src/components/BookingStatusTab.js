
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, } from 'react-native';
import { colors } from '../utilities/constants';
import { Typography } from '../utilities/constants/constant.style';
import { t } from 'i18next';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const BookingStatusTab = ({ selectedState, setselectedState, title }) => {
    return (
        <TouchableOpacity
            activeOpacity={.8}
            style={[styles.catBox, {
                backgroundColor: selectedState === title ? colors.Primary_01 : colors.Neutral_02,
                borderColor: selectedState !== title ? colors.Primary_01 : colors.Neutral_02,
                borderWidth: 0.5,
            }]}
            onPress={() => { setselectedState(title) }}
        >
            <Text style={[Typography.text_paragraph, { color: selectedState !== title ? colors.Primary_01 : colors.Neutral_02, fontSize: 16, }]}>{title}</Text>
        </TouchableOpacity>
    );
};
export default BookingStatusTab;

const styles = StyleSheet.create({
    catBox: {
        width: 105,
        height: 35,
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    }
});


