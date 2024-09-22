
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CustomHeader from '../../components/Header';
import { t } from 'i18next';
import { colors } from '../../utilities/constants';
import Images from '../../assets/images/index'
import ServiceCard from '../../components/ServiceCard';
import ServiceCardDiscounted from '../../components/ServiceCardDiscounted';

const Favorite = ({ navigation }) => {
    let isError = useSelector((state) => state.reducer.isError);
    const [allFavorites, setallFavorites] = useState(true);
    const [data, setdata] = useState([
        {
            title: 'Cleaning at Company',
            description: 'We specialize in delivering top-quality house cleaning services, ensuring every corner is spotless. Our team is committed to using 100% effort and care in every task, from dusting and vacuuming to deep cleaning kitchens and bathrooms.',
            price: 25,
            discount: 30,
            images: Images.cleaning
        },
        {
            title: 'Cleaning at Company',
            description: 'We specialize in delivering top-quality house cleaning services, ensuring every corner is spotless. Our team is committed to using 100% effort and care in every task, from dusting and vacuuming to deep cleaning kitchens and bathrooms.',
            price: 25,
            discount: 30,
            images: Images.cleaning
        },
        {
            title: 'Cleaning at Company',
            description: 'We specialize in delivering top-quality house cleaning services, ensuring every corner is spotless. Our team is committed to using 100% effort and care in every task, from dusting and vacuuming to deep cleaning kitchens and bathrooms.',
            price: 25,
            discount: 30,
            images: Images.cleaning
        },
        {
            title: 'Cleaning at Company',
            description: 'We specialize in delivering top-quality house cleaning services, ensuring every corner is spotless. Our team is committed to using 100% effort and care in every task, from dusting and vacuuming to deep cleaning kitchens and bathrooms.',
            price: 25,
            discount: 30,
            images: Images.cleaning
        },

    ]);

    return (
        <View style={styles.container}>
            <CustomHeader
                title={t('Favorites')}
                isLeft={true}
                leftPress={() => { navigation.goBack() }}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    activeOpacity={.8}
                    style={styles.button}
                    onPress={() => { setallFavorites(true) }}
                >
                    <Text style={{ color: colors.white, fontWeight: 'bold' }}>{t('allFavorites')}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={.8}
                    style={styles.button}
                    onPress={() => { setallFavorites(false) }}
                >
                    <Text style={{ color: colors.white, fontWeight: 'bold' }}>{t('discountinFavorites')}</Text>
                </TouchableOpacity>
            </View>
            {
                allFavorites &&
                <FlatList
                    data={data}
                    contentContainerStyle={{ marginTop: 10, width: '95%' }}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => <ServiceCard data={item} />}
                />
            }
            {
                !allFavorites &&
                <FlatList
                    data={data}
                    contentContainerStyle={{ marginTop: 10, marginLeft: 20 }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => <ServiceCardDiscounted data={item} />}
                />
            }
        </View>
    );
};

export default Favorite;

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
    buttonContainer: {
        marginTop: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    button: {
        width: '40%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.Primary_01
    }
});


