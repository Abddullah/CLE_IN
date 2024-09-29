
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, } from 'react-native';
import { colors } from '../utilities/constants';
import { Typography } from '../utilities/constants/constant.style';
import { t } from 'i18next';

const HorizontalList = ({ selectedState, setselectedState, title }) => {
    return (
        <TouchableOpacity
            activeOpacity={.8}
            style={[styles.catBox, {
                backgroundColor: selectedState === title ? colors.Primary_01 : colors.white,
                borderColor: selectedState !== title ? colors.Primary_01 : colors.white,
                borderWidth: 0.5,
            }]}
            onPress={() => { setselectedState(title) }}
        >
            <Text style={[Typography.text_paragraph, { color: selectedState !== title ? colors.Primary_01 : colors.white, fontSize: 16, }]}>{title}</Text>
        </TouchableOpacity>
    );
};
export default HorizontalList;

const styles = StyleSheet.create({
    catBox: {
        width: 40,
        height: 40,
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    }
});


