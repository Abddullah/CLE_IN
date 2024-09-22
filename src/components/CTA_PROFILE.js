
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, } from 'react-native';
import { colors } from '../utilities/constants';
import { Typography } from '../utilities/constants/constant.style';

const CTA_Profile = ({
    title,
    icon,
    submitHandler
}) => {
    return (
        <TouchableOpacity
            onPress={submitHandler}
            style={styles.wrapper}
            activeOpacity={.8}
        >
            <View style={{ top: 1 }}>
                {
                    icon
                }
            </View>
            <Text style={[Typography.text_paragraph_1, { marginLeft: 10, color: colors.black, fontSize: 13 }]}>{title}</Text>
        </TouchableOpacity>
    );
};

export default CTA_Profile;

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        width: '100%',
        height: 50,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 10,
        paddingLeft: 15,
        borderRadius: 5
    },

});


