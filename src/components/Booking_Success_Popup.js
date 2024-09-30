import React from 'react';
import { Modal, StyleSheet, ImageBackground, Text, View, TouchableOpacity } from 'react-native';
import Images from '../assets/images/index'
import { Typography } from '../utilities/constants/constant.style';
import { t } from 'i18next';

const SuccessModalBooking = ({ modalVisible, setModalVisible, isCancel }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => { setModalVisible() }}>
            <TouchableOpacity
                activeOpacity={.8}
                onPress={() => { setModalVisible() }}
                style={styles.centeredView}
            >
                <View style={styles.modalView}>
                    <ImageBackground
                        style={{ height: 300, width: 350, justifyContent: 'center', alignItems: 'center' }}
                        resizeMode="contain"
                        source={Images.popupBgBooking}
                    >
                        {
                            (isCancel) ? (
                                <Text style={[Typography.text_subHeading, { marginTop: '55%' }]}>{t('bookingCancel')}</Text>
                            ) : (
                                <Text style={[Typography.text_subHeading, { marginTop: '55%' }]}>{t('successful')}</Text>
                            )
                        }
                    </ImageBackground>
                </View>
            </TouchableOpacity>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        borderRadius: 35,
        backgroundColor: 'white',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginTop: 50,
    },
});

export default SuccessModalBooking;