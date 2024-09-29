
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { CallIcon, MsgIcon } from '../assets/icons';
import { colors } from '../utilities/constants';
import { Typography } from '../utilities/constants/constant.style';
import images from '../assets/images';

const BookingCard = ({
    data,
    submitHandler,
}) => {
    return (
        <TouchableOpacity
            activeOpacity={.8}
            style={styles.container}
        >
            <View style={styles.container_C1}>
                <Text style={[Typography.text_CTA1, { color: colors.black, fontWeight: 'normal' }]}>{'10:00 AM - 12:00 AM'}</Text>

                <View style={styles.statusButton}>
                    <Text style={[Typography.text_CTA1, { color: colors.Primary_01, fontWeight: 'normal' }]}>{'Pending'}</Text>
                </View>
            </View>
            <View style={styles.container_C2}>
                <View style={styles.container_C2_C1}>
                    <Image
                        resizeMode="cover"
                        style={{ width: 88, height: 88, borderRadius: 10 }}
                        source={images.cleaning}
                    />
                </View>
                <View style={styles.container_C2_C2}>
                    <Text style={[Typography.text_CTA1, { color: colors.black, fontWeight: 'bold', marginLeft: 10 }]}>{'Cleaning at Home'}</Text>
                    <Text style={[Typography.text_paragraph, { marginLeft: 10, marginTop: 5, textAlign: 'left' }]}>{"We specialize in delivering top-quality house cleaning services, ensuring every corner is spotless. Our team is committed to using 100% effort and care in every task, from dusting and vacuuming to deep cleaning kitchens and bathrooms.".substring(0, 70) + '...'}</Text>
                </View>
                <View style={styles.container_C2_C1}>
                    <Text style={[Typography.text_CTA1, { color: colors.Primary_01, fontWeight: 'bold' }]}>{'$450'}</Text>
                    <View style={styles.callMsgButtons}>
                        <CallIcon />
                        <MsgIcon />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default BookingCard;

const styles = StyleSheet.create({
    container: {
        width: '98%',
        height: 180,
        borderRadius: 15,
        marginTop: 20,
        overflow: 'hidden',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    container_C1: {
        width: '95%',
        height: 58,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: colors.Neutral_02,
        borderBottomWidth: .8,
    },
    container_C2: {
        width: '95%',
        height: 122,
        borderRadius: 15,
        overflow: 'hidden',
        flexDirection: 'row',
    },
    statusButton: {
        width: 90,
        height: 28,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.Primary_01,
        borderWidth: 1,
        borderRadius: 10
    },
    container_C2_C1: {
        flex: 1, justifyContent: 'center', alignItems: 'center',
    },
    container_C2_C2: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    callMsgButtons: {
        marginTop: 10,
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row'
    }

});


