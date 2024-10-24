import React from 'react';
import { Modal, StyleSheet, View, Text } from 'react-native';
import { LightThemeColors, DarkThemeColors } from '../utilities/constants';
import { useTheme } from '../../ThemeContext';
import Signature from "react-native-signature-canvas";
import { t } from 'i18next';

const SignatureComponent = ({ modalVisible, setModalVisible, setSign }) => {
    const { theme } = useTheme();
    const colors = theme === 'dark' ? DarkThemeColors : LightThemeColors;
    const styles = createStyles(colors, theme);

    const handleOK = (signature) => {
        setSign(signature);
        setModalVisible()
    };

    const handleEmpty = () => {
        console.log("Empty");
        setSign(null);
        setModalVisible()

    };

    const style = `.m-signature-pad--footer
    .button {
      background-color: #00BFFF;
      color: #FFF;
    }`;

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => { setModalVisible() }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Signature
                        onOK={handleOK}
                        onEmpty={handleEmpty}
                        onClear={handleEmpty}
                        penColor="#00BFFF"
                        descriptionText={t('Sign')}
                        clearText={t('Clear')}
                        confirmText={t('save')}
                        webStyle={style}
                    />
                </View>
            </View>
        </Modal>
    );
};


const createStyles = (colors, theme) => {
    return StyleSheet.create({
        centeredView: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
        },
        modalView: {
            height: 350,
            width: '60%'
        },

    });
};

export default SignatureComponent;