import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { colors } from '../utilities/constants';
import { Typography } from '../utilities/constants/constant.style';
import images from '../assets/images';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { PantagonShap } from '../assets/icons';

const ServiceCardDiscounted = ({
    data,
    submitHandler
}) => {
    return (
        <TouchableOpacity
            onPress={submitHandler}
            style={styles.wrapper}
            activeOpacity={.8}
        >
            <View style={{ width: 360, height: 215, borderRadius: 10, overflow: 'hidden' }}>
                <Image
                    resizeMode="cover"
                    style={{
                        width: 360, height: 215,
                    }}
                    source={images.cleaning}
                />
                <TouchableOpacity activeOpacity={.8} style={{ position: 'absolute', right: 20, top: 20 }}>
                    <AntDesign name="heart" style={{ fontSize: 20, color: colors.Primary_01, }} />
                </TouchableOpacity>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.textContainer}>
                    <Text style={[Typography.text_paragraph, { marginLeft: 10, color: colors.Primary_02, fontWeight: 'bold', fontSize: 16 }]}>{'$' + data.price + '/hr'}</Text>
                    <Text style={[Typography.text_paragraph, { marginLeft: 10, color: colors.black, fontWeight: 'bold', fontSize: 16 }]}>{data.title}</Text>
                </View>
                <View style={{ marginRight: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <PantagonShap style={{ fontSize: 50 }} />
                    <Text style={[Typography.text_paragraph, { color: colors.white, fontWeight: 'bold', fontSize: 10, position: 'absolute' }]}>
                        {`${data.discount + '%'}\noff`}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default ServiceCardDiscounted;

const styles = StyleSheet.create({
    wrapper: {
        height: 300,
        width: 360,
        borderRadius: 5,
        overflow: 'hidden',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderWidth: 0.1,
        borderColor: 'gray',
        margin: 5,
    },
    bottomContainer: {
        height: 70,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    textContainer: {
        height: 70,
        alignItems: 'flex-start',
        justifyContent: 'center',
    }

});





