import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ActivityIndicator, View } from 'react-native';
// local import
import { colors } from '../utilities/constants/';
import { Typography } from '../utilities/constants/constant.style';

const CTAButton1 = ({
    title,
    submitHandler,
    isLoader,
    icon
}) => {
    return (
        <TouchableOpacity
            onPress={submitHandler}
            activeOpacity={0.8}
            style={styles.CRAButton1}
        >
            {
                !isLoader ? (
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        {
                            icon && icon
                        }
                        <Text style={[styles.CRAButton1_Text, Typography.text_CTA1]}>{title}</Text>
                    </View>
                ) : (
                    <ActivityIndicator color={"white"} />
                )   
            }
        </TouchableOpacity>
    );
};

export default CTAButton1;

const styles = StyleSheet.create({
    CRAButton1: {
        backgroundColor: colors.Primary_01,
        borderRadius: 5,
        height: 50,
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    CRAButton1_Text: {
        textAlign: 'center',
        color: colors.white,
    },
});
