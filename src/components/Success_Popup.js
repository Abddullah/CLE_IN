import React from 'react';
import { Modal, StyleSheet, ImageBackground, Text, View } from 'react-native';
import Images from '../assets/images/index'
import CTAButton1 from './CTA_BUTTON1';
import { Typography } from '../utilities/constants/constant.style';
import { colors } from '../utilities/constants';
import { t } from 'i18next';

const SuccessModal = ({ modalVisible, setModalVisible }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <ImageBackground
                        style={{ height: 193, width: 318, justifyContent: 'center', alignItems: 'center' }}
                        resizeMode="contain"
                        source={Images.popupBg}
                    >
                        <Text style={[Typography.text_subHeading, { marginTop: 60 }]}>{t('success')}</Text>
                        <Text style={[Typography.text_paragraph, { marginTop: 5, color: colors.black }]}>{t('registerissucessfullyhaveenjoy')}</Text>
                        <View style={{ marginTop: 10, width: '80%' }}>
                            <CTAButton1 title={'OK'} submitHandler={() => setModalVisible(!modalVisible)} />
                        </View>
                    </ImageBackground>
                </View>
            </View>
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
        borderRadius: 10,
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

export default SuccessModal;