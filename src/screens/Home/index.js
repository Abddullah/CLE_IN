import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { t } from 'i18next';
import { Typography } from '../../utilities/constants/constant.style';
import { CatHome, CatCompany, CatHospital, CatOffice, CatFactory } from '../../assets/icons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import moment from 'moment';
import ServiceCard from '../../components/ServiceCard';
import Images from '../../assets/images/index'
import { LightThemeColors, DarkThemeColors } from '../../utilities/constants';
import { useTheme } from '../../../ThemeContext';

const Home = ({ navigation }) => {
    const { theme, toggleTheme } = useTheme();
    const colors = theme === 'dark' ? DarkThemeColors : LightThemeColors;
    const styles = createStyles(colors, theme);

    let isError = useSelector((state) => state.reducer.isError);
    const [search, setsearch] = useState('');
    const [data, setdata] = useState([
        {
            title: 'Cleaning at Company',
            description: 'We specialize in delivering top-quality house cleaning services, ensuring every corner is spotless. Our team is committed to using 100% effort and care in every task, from dusting and vacuuming to deep cleaning kitchens and bathrooms.',
            price: 25,
            discount: 30,
            images: [Images.cleaning, Images.cleaning, Images.cleaning, Images.cleaning, Images.cleaning],
            openTime: '10:00 AM to 12:00 PM',
            let: 0,
            lng: 0,
            reviews: [{ img: Images.profilePic, name: 'Charollette Hanlin', date: '23 May, 2023 | 02:00 PM', star: '5', review: 'Lorem ipsum dolor sit amet consectetur. Purus massa tristique arcu tempus ut ac porttitor. Lorem ipsum dolor sit amet consectetur. ' },]
        }, {
            title: 'Cleaning at Company',
            description: 'We specialize in delivering top-quality house cleaning services, ensuring every corner is spotless. Our team is committed to using 100% effort and care in every task, from dusting and vacuuming to deep cleaning kitchens and bathrooms.',
            price: 25,
            discount: 30,
            images: [Images.cleaning],
            openTime: '10:00 AM to 12:00 PM',
            let: 0,
            lng: 0,
            reviews: [{ img: Images.profilePic, name: 'Charollette Hanlin', date: '23 May, 2023 | 02:00 PM', star: '5', review: 'Lorem ipsum dolor sit amet consectetur. Purus massa tristique arcu tempus ut ac porttitor. Lorem ipsum dolor sit amet consectetur. ' },]
        },
        {
            title: 'Cleaning at Company',
            description: 'We specialize in delivering top-quality house cleaning services, ensuring every corner is spotless. Our team is committed to using 100% effort and care in every task, from dusting and vacuuming to deep cleaning kitchens and bathrooms.',
            price: 25,
            discount: 30,
            images: [Images.cleaning],
            openTime: '10:00 AM to 12:00 PM',
            let: 0,
            lng: 0,
            reviews: [{ img: Images.profilePic, name: 'Charollette Hanlin', date: '23 May, 2023 | 02:00 PM', star: '5', review: 'Lorem ipsum dolor sit amet consectetur. Purus massa tristique arcu tempus ut ac porttitor. Lorem ipsum dolor sit amet consectetur. ' },]
        },
        {
            title: 'Cleaning at Company',
            description: 'We specialize in delivering top-quality house cleaning services, ensuring every corner is spotless. Our team is committed to using 100% effort and care in every task, from dusting and vacuuming to deep cleaning kitchens and bathrooms.',
            price: 25,
            discount: 30,
            images: [Images.cleaning],
            openTime: '10:00 AM to 12:00 PM',
            let: 0,
            lng: 0,
            reviews: [{ img: Images.profilePic, name: 'Charollette Hanlin', date: '23 May, 2023 | 02:00 PM', star: '5', review: 'Lorem ipsum dolor sit amet consectetur. Purus massa tristique arcu tempus ut ac porttitor. Lorem ipsum dolor sit amet consectetur. ' },]
        },
        {
            title: 'Cleaning at Company',
            description: 'We specialize in delivering top-quality house cleaning services, ensuring every corner is spotless. Our team is committed to using 100% effort and care in every task, from dusting and vacuuming to deep cleaning kitchens and bathrooms.',
            price: 25,
            discount: 30,
            images: [Images.cleaning],
            openTime: '10:00 AM to 12:00 PM',
            let: 0,
            lng: 0,
            reviews: [{ img: Images.profilePic, name: 'Charollette Hanlin', date: '23 May, 2023 | 02:00 PM', star: '5', review: 'Lorem ipsum dolor sit amet consectetur. Purus massa tristique arcu tempus ut ac porttitor. Lorem ipsum dolor sit amet consectetur. ' },]
        },


    ]);

    return (
        <View style={styles.container}>
            
            <View style={styles.boxContainer}>
                <View style={{ width: '100%', }}>
                    <View style={styles.inputContiner}>
                        <AntDesign name="search1" style={{ fontSize: 20, color: colors.Primary_01, }} />
                        <TextInput
                            keyboardType='number-pad'
                            style={styles.input}
                            value={search}
                            onChangeText={(e) => { setsearch(e) }}
                            placeholder={t('search')}
                            placeholderTextColor={theme === 'dark' ? colors.white : colors.Neutral_01}
                        />
                    </View>
                </View>
            </View>

            <ScrollView
                style={{ width: '95%', }}
                contentContainerStyle={styles.scrollBar}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.catContainer}>
                    <Text style={[Typography.text_paragraph_1, { fontWeight: 'bold', color: colors.black, }]}>{t('specialservices')}</Text>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{ flexDirection: 'row', marginTop: 10 }}
                    >
                        <TouchableOpacity
                            activeOpacity={.8}
                            style={styles.catBox}
                        >
                            <CatHome />
                            <Text style={[Typography.text_paragraph, { color: colors.black }]}>{t('cleaningathome')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={.8}
                            style={styles.catBox}
                        >
                            <CatCompany />
                            <Text style={[Typography.text_paragraph, { color: colors.black }]}>{t('cleaningatcompany')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={.8}
                            style={styles.catBox}
                        >
                            <CatHospital />
                            <Text style={[Typography.text_paragraph, { color: colors.black }]}>{t('cleaningathospital')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={.8}
                            style={styles.catBox}
                        >
                            <CatOffice />
                            <Text style={[Typography.text_paragraph, { color: colors.black }]}>{t('cleaningatoffice')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={.8}
                            style={styles.catBox}
                        >
                            <CatFactory />
                            <Text style={[Typography.text_paragraph, { color: colors.black }]}>{t('cleaningatfactory')}</Text>
                        </TouchableOpacity>
                    </ScrollView>
                    <Text style={[Typography.text_paragraph_1, { fontWeight: 'bold', color: colors.black, marginTop: 30 }]}>{t('specialservices')}</Text>
                </View>

                <FlatList
                    data={data}
                    contentContainerStyle={{ marginTop: 10, width: '100%', }}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => <ServiceCard data={item} isFav={true} submitHandler={() => { navigation.navigate('AdFullView', { item: item }) }} />}
                />
            </ScrollView>
        </View>
    );
};

export default Home;
const createStyles = (colors, theme) => {
    return StyleSheet.create({
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
        boxContainer: {
            width: '90%',
            height: 70,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            marginTop: 10,
        },
        inputContiner: {
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'row',
            paddingLeft: 10,
            backgroundColor: colors.white,
            borderColor: colors.Primary_01,
            borderRadius: 5,
            borderWidth: 1,
            marginTop: 10,
            backgroundColor: colors.BothWhite
        },
        catContainer: {
            marginTop: 10,
            width: '90%',
            justifyContent: 'center',
            alignItems: 'flex-start',
        },
        catBox: {
            width: 98,
            justifyContent: 'center',
            alignItems: 'center',
        }
    });
};

