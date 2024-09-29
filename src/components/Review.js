
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { colors } from '../utilities/constants';
import { Typography } from '../utilities/constants/constant.style';
import { t } from 'i18next';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ReviewsList = ({ selectedState, setselectedState, title }) => {
    return (
        <>
            <View style={[{ flex: 1, height: 50, }, styles.list2]}>
                <View style={styles.reviewContiner}>
                    <Image
                        resizeMode="contain"
                        style={{ borderRadius: 100, width: 48, height: 48 }}
                        source={Images.profilePic}
                    />
                    <View>
                        <Text style={[Typography.text_paragraph_1, { fontWeight: 'bold', color: colors.Primary_01, }]}>{'Charollette Hanlin'}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesome name="star" size={20} color={colors.yellow} />
                            <FontAwesome name="star" size={20} color={colors.yellow} />
                            <FontAwesome name="star" size={20} color={colors.yellow} />
                            <FontAwesome name="star" size={20} color={colors.yellow} />
                            <FontAwesome name="star" size={20} color={colors.yellow} />
                        </View>
                    </View>
                    <Text style={Typography.text_paragraph}>{'23 May, 2023 | 02:00 PM'}</Text>
                </View>
            </View>
            <View style={styles.list2}>
                <Text style={[Typography.text_paragraph, { textAlign: 'left' }]}>{'Lorem ipsum dolor sit amet consectetur. Purus massa tristique arcu tempus ut ac porttitor. Lorem ipsum dolor sit amet consectetur. '}</Text>
            </View>
        </>
    );
};
export default ReviewsList;

const styles = StyleSheet.create({
    reviewContiner: {
        flex: 1,
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between',
    },
    list2: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '100%'
    },
});


