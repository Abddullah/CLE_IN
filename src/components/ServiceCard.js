
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { colors } from '../utilities/constants';
import { Typography } from '../utilities/constants/constant.style';
import images from '../assets/images';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { LightThemeColors, DarkThemeColors } from '../utilities/constants';
import { useTheme } from '../../ThemeContext';

const ServiceCard = ({
    data,
    submitHandler,
    isFav
}) => {
    const { theme } = useTheme();
    const colors = theme === 'dark' ? DarkThemeColors : LightThemeColors;
    const styles = createStyles(colors, theme);

    return (
        <TouchableOpacity
            onPress={submitHandler}
            style={styles.wrapper}
            activeOpacity={.8}
        >
            <View style={{ width: 170, height: 110, borderRadius: 10, overflow: 'hidden' }}>
                <Image
                    resizeMode="cover"
                    style={{
                        width: 170, height: 110,
                    }}
                    source={images.cleaning}
                />
                {
                    isFav === true &&
                    <TouchableOpacity activeOpacity={.8} style={{ position: 'absolute', right: 10, top: 10 }}>
                        <AntDesign name="heart" style={{ fontSize: 20, color: colors.Primary_01, }} />
                    </TouchableOpacity>
                }
            </View>
            <View style={styles.textContainer}>
                <Text style={[Typography.text_paragraph, { marginLeft: 10, color: theme === 'dark' ? colors.black : colors.Primary_02, fontWeight: 'bold' }]}>{'$' + data.price + '/hr'}</Text>
                <Text style={[Typography.text_paragraph, { marginLeft: 10, color: colors.black, fontWeight: 'bold' }]}>{data.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default ServiceCard;

const createStyles = (colors, theme) => {
    return StyleSheet.create({
        wrapper: {
            height: 180,
            width: 170,
            borderRadius: 5,
            overflow: 'hidden',
            justifyContent: 'flex-start',
            alignItems: 'center',
            borderWidth: 0.3,
            borderColor: 'gray',
            margin: 5,
        },
        textContainer: {
            height: 70,
            width: '100%',
            alignItems: 'flex-start',
            justifyContent: 'center',
        }
    });
};

