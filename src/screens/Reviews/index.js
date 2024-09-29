import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CustomHeader from '../../components/Header';
import { t } from 'i18next';
import { colors } from '../../utilities/constants';
import { Typography } from '../../utilities/constants/constant.style';
import Images from '../../assets/images/index'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HorizontalListWithStar from '../../components/horizontalListWithStar';
import VerticalStarList from '../../components/VerticalStarList';
import ReviewsList from '../../components/Review';

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
                <VerticalStarList />
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
                    <HorizontalListWithStar selectedState={selectedStar} setselectedState={setselectedStar} title={t('all')} />
                    <HorizontalListWithStar selectedState={selectedStar} setselectedState={setselectedStar} title={'5'} />
                    <HorizontalListWithStar selectedState={selectedStar} setselectedState={setselectedStar} title={'4'} />
                    <HorizontalListWithStar selectedState={selectedStar} setselectedState={setselectedStar} title={'3'} />
                    <HorizontalListWithStar selectedState={selectedStar} setselectedState={setselectedStar} title={'2'} />
                    <HorizontalListWithStar selectedState={selectedStar} setselectedState={setselectedStar} title={'1'} />
                </ScrollView>

                <ReviewsList />

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
});



