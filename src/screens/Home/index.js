import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { t } from 'i18next';
import { Typography } from '../../utilities/constants/constant.style';
import FastImage from 'react-native-fast-image'
import { SliderBox } from "react-native-image-slider-box";
// import { CatHome, CatCompany, CatHospital, CatOffice, CatFactory } from '../../assets/icons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import ServiceCard from '../../components/ServiceCard';
import Images from '../../assets/images/index'
import { LightThemeColors, DarkThemeColors } from '../../utilities/constants';
import { useTheme } from '../../../ThemeContext';
import Categories from '../../components/Categories';
import screenResolution from '../../utilities/constants/screenResolution';
import CustomTabs from '../../components/CustomTabs';

const deviceWidth = screenResolution.screenWidth;

const Home = ({ navigation }) => {
    const { theme } = useTheme();
    const colors = theme === 'dark' ? DarkThemeColors : LightThemeColors;
    const styles = createStyles(colors, theme);
    let user = useSelector((state) => state.reducer.user);
    let isError = useSelector((state) => state.reducer.isError);
    const numColumns = deviceWidth < 360 ? 1 : 2;
    const [selectedTab, setselectedTab] = useState();
    const [isJobsTab, setisJobsTab] = useState(false);

    const [search, setsearch] = useState('');
    const [selectedCat, setselectedCat] = useState(t('cleaningandhygiene'));

    const [categories, setcategories] = useState([
        {
            title: t('cleaningandhygiene'),
            image: Images.CleaningandHygieneServices,
        },
        {
            title: t('RenovationServices'),
            image: Images.RenovationServices,
        },
        {
            title: t('InstallationServices'),
            image: Images.InstallationServices,
        },
        {
            title: t('HomeMaintenanceServices'),
            image: Images.HomeMaintenanceServices,
        },

    ]);

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

    useEffect(() => {
        user.role === 'user' && setselectedTab('')
        user.role !== 'user' && setselectedTab(t('myads'))
    }, [user])

    const selectedCatHandler = (title) => {
        console.log(title, 'title');
        setselectedCat(title)
    }

    return (
        <View style={styles.container}>

            <View style={styles.boxContainer}>
                <View style={{ width: '100%', }}>
                    <View style={styles.inputContiner}>
                        <AntDesign name="search1" style={{ fontSize: 20, color: colors.Primary_01, }} />
                        <TextInput
                            // keyboardType='number-pad'
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

                {/* /Provider/ */}

                {
                    user.role !== 'user' &&
                    <View style={styles.buttonContainer}>
                        <CustomTabs selectedState={selectedTab} setselectedState={setselectedTab} title={t('myads')} />
                        <CustomTabs selectedState={selectedTab} setselectedState={setselectedTab} title={t('jobs')} />
                    </View>
                }


                {
                    (user.role !== 'user' && selectedTab === t('myads')) &&
                    <>
                        <View style={{ width: '100%', alignItems: 'center', marginTop: 10 }}>
                            <FlatList
                                data={data}
                                style={{ marginTop: 10, }}
                                contentContainerStyle={{ justifyContent: 'center', }} // Add padding for even spacing on the sides
                                numColumns={2}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item }) => (
                                    <ServiceCard
                                        data={item}
                                        isFav={true}
                                        submitHandler={() => { navigation.navigate('AdFullView', { item: item, isBooking: false }) }}
                                    />
                                )}
                                ItemSeparatorComponent={() => <View style={{ height: 10 }} />} // Add vertical space between rows
                            />
                        </View>
                    </>
                }
                {
                    (user.role !== 'user' && selectedTab !== t('myads')) &&
                    < View style={styles.catContainer}>
                        <View style={styles.headerSection}>
                            <SliderBox
                                autoplay={true}
                                ImageComponent={FastImage}
                                images={[Images.cleaning, Images.cleaning, Images.cleaning, Images.cleaning, Images.cleaning]}
                                sliderBoxHeight={230}
                                onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                                dotColor={colors.Primary_01}
                                inactiveDotColor="#90A4AE"
                                resizeMethod={'resize'}
                                resizeMode={'cover'}
                                circleLoop
                                dotStyle={{ width: 8, height: 8, borderRadius: 4, }}
                            />
                        </View>

                        <Text style={[Typography.text_paragraph_1, { fontWeight: 'bold', color: colors.black, }]}>{t('specialservices')}</Text>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={{ flexDirection: 'row', marginTop: 10 }}
                        >
                            <FlatList
                                data={categories}
                                contentContainerStyle={{}}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item }) => <Categories icon={item.image} title={item.title} submitHandler={(title) => { selectedCatHandler(title) }} selectedCat={selectedCat} />}
                            />
                        </ScrollView>
                    </View>
                }

                {/* /User/ */}

                {
                    user.role === 'user' &&
                    <View style={styles.buttonContainer}>
                        <CustomTabs selectedState={selectedTab} setselectedState={setselectedTab} title={t('services')} />
                        <CustomTabs selectedState={selectedTab} setselectedState={setselectedTab} title={t('myjobs')} />
                    </View>
                }

                {
                    user.role === 'user' &&
                    <View style={styles.catContainer}>
                        <View style={styles.headerSection}>
                            <SliderBox
                                autoplay={true}
                                ImageComponent={FastImage}
                                images={[Images.cleaning, Images.cleaning, Images.cleaning, Images.cleaning, Images.cleaning]}
                                sliderBoxHeight={230}
                                onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                                dotColor={colors.Primary_01}
                                inactiveDotColor="#90A4AE"
                                resizeMethod={'resize'}
                                resizeMode={'cover'}
                                circleLoop
                                dotStyle={{ width: 8, height: 8, borderRadius: 4, }}
                            />
                        </View>

                        <Text style={[Typography.text_paragraph_1, { fontWeight: 'bold', color: colors.black, }]}>{t('specialservices')}</Text>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={{ flexDirection: 'row', marginTop: 10 }}
                        >
                            <FlatList
                                data={categories}
                                contentContainerStyle={{}}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item }) => <Categories icon={item.image} title={item.title} submitHandler={(title) => { selectedCatHandler(title) }} selectedCat={selectedCat} />}
                            />
                        </ScrollView>
                    </View>
                }

                {
                    // user.role === 'user' &&
                    selectedTab !== t('myads') &&
                    <>
                        <View style={{ width: '95%', alignItems: 'flex-start', }}>
                            <View style={styles.subCatTextContainer}>
                                <Text style={[Typography.text_paragraph_1, { fontWeight: 'bold', color: colors.black, marginTop: 20 }]}>
                                    {'Office Cleaning'}
                                </Text>
                                <TouchableOpacity activeOpacity={.8}>
                                    <Text style={[Typography.text_paragraph_1, { fontWeight: 'bold', color: colors.black, marginTop: 20 }]}>
                                        {t('viewAll')}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <FlatList
                                data={data}
                                contentContainerStyle={{ marginTop: 10, }}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item, index }) =>
                                    <ServiceCard
                                        index={index}
                                        data={item}
                                        isFav={true}
                                        submitHandler={() => {
                                            navigation.navigate('AdFullView', { item: item, isBooking: false, isJob: true });
                                        }}
                                    />
                                }
                            />
                        </View>
                        <View style={{ width: '95%', alignItems: 'flex-start' }}>
                            <View style={styles.subCatTextContainer}>
                                <Text style={[Typography.text_paragraph_1, { fontWeight: 'bold', color: colors.black, marginTop: 20 }]}>
                                    {'Room Cleaning'}
                                </Text>
                                <TouchableOpacity activeOpacity={.8}>
                                    <Text style={[Typography.text_paragraph_1, { fontWeight: 'bold', color: colors.black, marginTop: 20 }]}>
                                        {t('viewAll')}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <FlatList
                                data={data}
                                contentContainerStyle={{ marginTop: 10, }}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item, index }) =>
                                    <ServiceCard
                                        index={index}
                                        data={item}
                                        isFav={true}
                                        submitHandler={() => {
                                            navigation.navigate('AdFullView', { item: item, isBooking: false, isJob: true });
                                        }}
                                    />
                                }
                            />
                        </View>
                        <View style={{ width: '95%', alignItems: 'flex-start' }}>
                            <View style={styles.subCatTextContainer}>
                                <Text style={[Typography.text_paragraph_1, { fontWeight: 'bold', color: colors.black, marginTop: 20 }]}>
                                    {'Pest control service'}
                                </Text>
                                <TouchableOpacity activeOpacity={.8}>
                                    <Text style={[Typography.text_paragraph_1, { fontWeight: 'bold', color: colors.black, marginTop: 20 }]}>
                                        {t('viewAll')}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <FlatList
                                data={data}
                                contentContainerStyle={{ marginTop: 10, }}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item, index }) =>
                                    <ServiceCard
                                        index={index}
                                        data={item}
                                        isFav={true}
                                        submitHandler={() => {
                                            navigation.navigate('AdFullView', { item: item, isBooking: false, isJob: true });
                                        }}
                                    />
                                }
                            />
                        </View>
                        <View style={{ width: '95%', alignItems: 'flex-start' }}>
                            <View style={styles.subCatTextContainer}>
                                <Text style={[Typography.text_paragraph_1, { fontWeight: 'bold', color: colors.black, marginTop: 20 }]}>
                                    {'Laundry Service'}
                                </Text>
                                <TouchableOpacity activeOpacity={.8}>
                                    <Text style={[Typography.text_paragraph_1, { fontWeight: 'bold', color: colors.black, marginTop: 20 }]}>
                                        {t('viewAll')}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <FlatList
                                data={data}
                                contentContainerStyle={{ marginTop: 10, }}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item, index }) =>
                                    <ServiceCard
                                        index={index}
                                        data={item}
                                        isFav={true}
                                        submitHandler={() => {
                                            navigation.navigate('AdFullView', { item: item, isBooking: false, isJob: true });
                                        }}
                                    />
                                }
                            />
                        </View>
                        <View style={{ width: '95%', alignItems: 'flex-start' }}>
                            <View style={styles.subCatTextContainer}>
                                <Text style={[Typography.text_paragraph_1, { fontWeight: 'bold', color: colors.black, marginTop: 20 }]}>
                                    {'Etc.'}
                                </Text>
                                <TouchableOpacity activeOpacity={.8}>
                                    <Text style={[Typography.text_paragraph_1, { fontWeight: 'bold', color: colors.black, marginTop: 20 }]}>
                                        {t('viewAll')}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <FlatList
                                data={data}
                                contentContainerStyle={{ marginTop: 10, }}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item, index }) =>
                                    <ServiceCard
                                        index={index}
                                        data={item}
                                        isFav={true}
                                        submitHandler={() => {
                                            navigation.navigate('AdFullView', { item: item, isBooking: false, isJob: true });
                                        }}
                                    />
                                }
                            />
                        </View>
                    </>
                }
            </ScrollView >

            <TouchableOpacity
                activeOpacity={.8}
                style={styles.febbutton}
                onPress={() => { navigation.navigate('ServiceCreate') }}
            >
                <Ionicons name="add-outline" style={{ fontSize: 40, color: colors.white, }} />
            </TouchableOpacity>

        </View >
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
            width: '95%',
            justifyContent: 'center',
            alignItems: 'flex-start',
        },
        headerSection: {
            height: 100,
            width: '100%',
            overflow: 'hidden',
            borderRadius: 10,
            backgroundColor: 'white',
            marginBottom: 10
        },
        catBox: {
            width: 98,
            justifyContent: 'center',
            alignItems: 'center',
        },
        febbutton: {
            position: 'absolute', bottom: 25, right: 25,
            borderRadius: 50, height: 50, width: 50,
            backgroundColor: colors.White_Primary_01,
            justifyContent: 'center', alignItems: 'center',
            borderColor: colors.white,
            borderWidth: 2
        },
        buttonContainer: {
            marginTop: 10,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
        },
        subCatTextContainer: {
            flexDirection: 'row',
            width: '97%',
            justifyContent: 'space-between'
        }
    });
};

