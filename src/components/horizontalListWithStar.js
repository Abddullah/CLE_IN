
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, } from 'react-native';
import { colors } from '../utilities/constants';
import { Typography } from '../utilities/constants/constant.style';
import { t } from 'i18next';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HorizontalListWithStar = ({ selectedState, setselectedState, title }) => {
    return (
        <TouchableOpacity
            activeOpacity={.8}
            style={[styles.catBox, {
                backgroundColor: selectedState === title ? colors.yellow : colors.white,
                borderColor: selectedState !== title ? colors.yellow : colors.white,
                borderWidth: 0.5,
            }]}
            onPress={() => { setselectedState(title) }}
        >
            <FontAwesome
                name="star"
                size={15}
                color={selectedState !== title ? colors.yellow : colors.white}
            />
            <Text style={[Typography.text_paragraph, { color: selectedState !== title ? colors.yellow : colors.white, fontSize: 16, marginLeft: 8 }]}>{title}</Text>
        </TouchableOpacity>
    );
};
export default HorizontalListWithStar;

const styles = StyleSheet.create({
    catBox: {
        width: 90,
        height: 40,
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    }
});


