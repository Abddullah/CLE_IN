import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, TextInput, Alert } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../utilities/constants';
import { t } from 'i18next';
const { width, height } = Dimensions.get('window');
import { SendButton } from '../assets/icons';


const CommentInput = ({ onPress }) => {
    const [text, onChangeText] = useState('');
    const [isFocus, setIsFocus] = useState(false);

    return (
        <View style={styles.wrapper}>
            <View style={styles.inputBox(isFocus)}>
                <TextInput
                    value={text}
                    placeholder={t('typeamsg')}
                    placeholderTextColor={isFocus ? 'black' : 'gray'}
                    onChangeText={onChangeText}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    style={styles.input}
                />
            </View>
            <TouchableOpacity
                onPress={() => {
                    Alert.alert('Its Demo')
                    onChangeText('');
                }}
                activeOpacity={0.8}
                style={styles.sendBtn}>

                <SendButton />
            </TouchableOpacity>
        </View>
    );
};

export default CommentInput;

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: colors.Neutral_05,
        position: 'absolute',
        overflow: 'hidden',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,

    },
    inputBox: isFocus => ({
        width: '80%',
        height: 60,
        borderRadius: 15,
        paddingHorizontal: width * 0.04,
        justifyContent: 'center',
    }),
    input: {
        borderRadius: 20,
        height: height * 0.07,
        color: colors.black,
        fontSize: 16,
    },
    sendBtn: {
        borderRadius: 20,
        backgroundColor: colors.Neutral_05,
        width: '20%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: width * 0.06,
        height: width * 0.06,
    },
});
