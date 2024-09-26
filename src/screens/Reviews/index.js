import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CustomHeader from '../../components/Header';
import { t } from 'i18next';
import { colors } from '../../utilities/constants';
import { Typography } from '../../utilities/constants/constant.style';
import Images from '../../assets/images/index'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Reviews = ({ navigation }) => {
    let isError = useSelector((state) => state.reducer.isError);
    const [selectedStar, setselectedStar] = useState('');

    return (
        <View style={styles.container}>
            <CustomHeader
                title={t('reviews')}
                isLeft={true}
                leftPress={() => { navigation.goBack() }}
            />

            <View style={{ flexDirection: 'row', marginTop: 10, height: 200, width: '95%', borderBottomColor: colors.Neutral_02, borderBottomWidth: 1 }}>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRightColor: colors.Neutral_02, borderRightWidth: 1 }}>
                    <Text style={[Typography.text_paragraph_1, { fontWeight: 'bold', color: colors.black, fontSize: 30 }]}>{'5'}</Text>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <FontAwesome name="star" size={20} color={colors.yellow} />
                        <FontAwesome name="star" size={20} color={colors.yellow} />
                        <FontAwesome name="star" size={20} color={colors.yellow} />
                        <FontAwesome name="star" size={20} color={colors.yellow} />
                        <FontAwesome name="star" size={20} color={colors.yellow} />
                    </View>
                    <Text style={[Typography.text_paragraph_1, { color: colors.black, fontSize: 16, marginTop: 10 }]}>{'1 Review'}</Text>
                </View>


                <View style={{ flex: 1 }}>
                    <TouchableOpacity
                        activeOpacity={.8}
                        style={{ flexDirection: 'row', height: 40, width: '100%', }}
                    >
                        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', }}>
                            <Text style={[Typography.text_paragraph_1, { color: colors.black, fontSize: 16, }]}>{'5'}</Text>
                        </View>
                        <View style={{ flex: 8, justifyContent: 'center', alignItems: 'flex-start', }}>
                            <View style={styles.line} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={.8}
                        style={{ flexDirection: 'row', height: 40, width: '100%', }}
                    >
                        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', }}>
                            <Text style={[Typography.text_paragraph_1, { color: colors.black, fontSize: 16, }]}>{'4'}</Text>
                        </View>

                        <View style={{ flex: 8, justifyContent: 'center', alignItems: 'flex-start', }}>
                            <View style={[styles.line, { width: '80%' }]} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={.8}
                        style={{ flexDirection: 'row', height: 40, width: '100%', }}
                    >
                        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', }}>
                            <Text style={[Typography.text_paragraph_1, { color: colors.black, fontSize: 16, }]}>{'3'}</Text>
                        </View>

                        <View style={{ flex: 8, justifyContent: 'center', alignItems: 'flex-start', }}>
                            <View style={[styles.line, { width: '60%' }]} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={.8}
                        style={{ flexDirection: 'row', height: 40, width: '100%', }}
                    >
                        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', }}>
                            <Text style={[Typography.text_paragraph_1, { color: colors.black, fontSize: 16, }]}>{'2'}</Text>
                        </View>

                        <View style={{ flex: 8, justifyContent: 'center', alignItems: 'flex-start', }}>
                            <View style={[styles.line, { width: '40%' }]} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={.8}
                        style={{ flexDirection: 'row', height: 40, width: '100%', }}
                    >
                        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', }}>
                            <Text style={[Typography.text_paragraph_1, { color: colors.black, fontSize: 16, }]}>{'1'}</Text>
                        </View>

                        <View style={{ flex: 8, justifyContent: 'center', alignItems: 'flex-start', }}>
                            <View style={[styles.line, { width: '10%' }]} />
                        </View>
                    </TouchableOpacity>
                </View>

            </View>

            <ScrollView
                style={{ width: '90%', marginTop: 10 }}
                contentContainerStyle={styles.scrollBar}
                showsVerticalScrollIndicator={false}
            >

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ flexDirection: 'row', marginTop: 10 }}
                >
                    <TouchableOpacity
                        activeOpacity={.8}
                        style={[styles.catBox, {
                            backgroundColor: selectedStar === t('all') ? colors.yellow : colors.white,
                            borderColor: selectedStar !== t('all') ? colors.yellow : colors.white,
                            borderWidth: 0.5,
                        }]}
                        onPress={() => { setselectedStar(t('all')) }}
                    >
                        <FontAwesome
                            name="star"
                            size={15}
                            color={selectedStar !== t('all') ? colors.yellow : colors.white}
                        />
                        <Text style={[Typography.text_paragraph, { color: selectedStar !== t('all') ? colors.yellow : colors.white, fontSize: 16, marginLeft: 8 }]}>{t('all')}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={.8}
                        style={[styles.catBox, {
                            backgroundColor: selectedStar === '5' ? colors.yellow : colors.white,
                            borderColor: selectedStar !== '5' ? colors.yellow : colors.white,
                            borderWidth: 0.5,
                        }]}
                        onPress={() => { setselectedStar('5') }}
                    >
                        <FontAwesome
                            name="star"
                            size={15}
                            color={selectedStar !== '5' ? colors.yellow : colors.white}
                        />
                        <Text style={[Typography.text_paragraph, { color: selectedStar !== '5' ? colors.yellow : colors.white, fontSize: 16, marginLeft: 8 }]}>{'5'}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={.8}
                        style={[styles.catBox, {
                            backgroundColor: selectedStar === '4' ? colors.yellow : colors.white,
                            borderColor: selectedStar !== '4' ? colors.yellow : colors.white,
                            borderWidth: 0.5,
                        }]}
                        onPress={() => { setselectedStar('4') }}
                    >
                        <FontAwesome
                            name="star"
                            size={15}
                            color={selectedStar !== '4' ? colors.yellow : colors.white}
                        />
                        <Text style={[Typography.text_paragraph, { color: selectedStar !== '4' ? colors.yellow : colors.white, fontSize: 16, marginLeft: 8 }]}>{'4'}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={.8}
                        style={[styles.catBox, {
                            backgroundColor: selectedStar === '3' ? colors.yellow : colors.white,
                            borderColor: selectedStar !== '3' ? colors.yellow : colors.white,
                            borderWidth: 0.5,
                        }]}
                        onPress={() => { setselectedStar('3') }}
                    >
                        <FontAwesome
                            name="star"
                            size={15}
                            color={selectedStar !== '3' ? colors.yellow : colors.white}
                        />
                        <Text style={[Typography.text_paragraph, { color: selectedStar !== '3' ? colors.yellow : colors.white, fontSize: 16, marginLeft: 8 }]}>{'3'}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={.8}
                        style={[styles.catBox, {
                            backgroundColor: selectedStar === '2' ? colors.yellow : colors.white,
                            borderColor: selectedStar !== '2' ? colors.yellow : colors.white,
                            borderWidth: 0.5,
                        }]}
                        onPress={() => { setselectedStar('2') }}
                    >
                        <FontAwesome
                            name="star"
                            size={15}
                            color={selectedStar !== '2' ? colors.yellow : colors.white}
                        />
                        <Text style={[Typography.text_paragraph, { color: selectedStar !== '2' ? colors.yellow : colors.white, fontSize: 16, marginLeft: 8 }]}>{'2'}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={.8}
                        style={[styles.catBox, {
                            backgroundColor: selectedStar === '1' ? colors.yellow : colors.white,
                            borderColor: selectedStar !== '1' ? colors.yellow : colors.white,
                            borderWidth: 0.5,
                        }]}
                        onPress={() => { setselectedStar('1') }}
                    >
                        <FontAwesome
                            name="star"
                            size={15}
                            color={selectedStar !== '1' ? colors.yellow : colors.white}
                        />
                        <Text style={[Typography.text_paragraph, { color: selectedStar !== '1' ? colors.yellow : colors.white, fontSize: 16, marginLeft: 8 }]}>{'1'}</Text>
                    </TouchableOpacity>

                </ScrollView>

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

            </ScrollView>


        </View>
    );
};

export default Reviews;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollBar: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 50
    },
    line: {
        height: 2,
        backgroundColor: colors.yellow,
        width: '100%',
    },
    list2: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '100%'
    },
    reviewContiner: {
        flex: 1,
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between',
    },
    catBox: {
        width: 90,
        height: 40,
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    }
});



