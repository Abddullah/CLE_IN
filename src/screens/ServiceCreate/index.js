import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity, FlatList, ActivityIndicator, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';
import { Select } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { t } from 'i18next';
// icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import moment from 'moment';
import Entypo from 'react-native-vector-icons/Entypo'
import DatePicker from 'react-native-date-picker';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
// local imports
import { useTheme } from '../../../ThemeContext';
import { LightThemeColors, DarkThemeColors } from '../../utilities/constants';
import { Typography } from '../../utilities/constants/constant.style';
import { MapSmall } from '../../assets/icons';
import CTAButton1 from '../../components/CTA_BUTTON1';
import CustomHeader from '../../components/Header';
import WeekTimeSelector from '../../components/WeekTimeSelector';
import Images from '../../assets/images/index'
import screenResolution from '../../utilities/constants/screenResolution';
import RepeatService from '../../components/RepeatService_Popup';
import InformationPopup from '../../components/Information_Popup';
import BookingStatusTab from '../../components/BookingStatusTab';
import HorizontalList from '../../components/horizontalList';
import AdditionalServices from '../../components/AdditionalServices';

const deviceWidth = screenResolution.screenWidth;

const CreateService = ({ navigation }) => {
    const route = useRoute();
    let isJobCreate = route.params.isJobCreate;
    console.log(isJobCreate, 'isJobCreate');
    let user = useSelector((state) => state.reducer.user);
    const { theme, toggleTheme } = useTheme();
    const colors = theme === 'dark' ? DarkThemeColors : LightThemeColors;
    const styles = createStyles(colors, theme, deviceWidth);
    const [informationPopup, setinformationPopup] = useState(false);
    const [informationPopup1, setinformationPopup1] = useState(false);
    const [modalVisible, setModalVisible] = useState(true);

    const [selectedHour, setselectedHour] = useState('');
    const [selectedProfessional, setselectedProfessional] = useState('');

    const [categories, setcategories] = useState('');
    const [subcategories, setsubcategories] = useState('');

    let isError = useSelector((state) => state.reducer.isError);
    const [step, setstep] = useState(0);
    const options = [
        { label: t('cleaningathome'), value: 'Cleaning at Home' },
        { label: t('cleaningatcompany'), value: 'Cleaning at Company' },
        { label: t('cleaningatoffice'), value: 'Cleaning at Office' },
        { label: t('cleaningathospital'), value: 'Cleaning at Hospital' },
        { label: t('cleaningatfactory'), value: 'Cleaning at Factory' },
    ];
    const [selectedCategories, setselectedCategories] = useState('');
    const [roomsQty, setroomsQty] = useState('1');
    const [roomsize, setroomsize] = useState('');
    const [totalPrice, settotalPrice] = useState('5');
    const [selectedTab, setselectedTab] = useState('');

    const [rates, setrates] = useState('');
    const [description, setdescription] = useState('');
    const [location, setlocation] = useState('')
    const [instructions, setinstructions] = useState('');
    const [productImages, setProductImages] = useState(
        [
            { imagURL: '' },
            { imagURL: '' },
            { imagURL: '' },
            { imagURL: '' },
            { imagURL: '' },
            { imagURL: '' },
        ]
    );

    const [date, setDate] = useState(new Date())
    const [openBs, setopenBs] = useState(false)
    const [showBs, setshowBs] = useState(false)
    const [timeSlots, settimeSlots] = useState([
        {
            startTime: '08:00 am',
            endTime: '10:00 am',
            isSelected: false
        },
        {
            startTime: '10:00 am',
            endTime: '12:00 pm',
            isSelected: false
        },
        {
            startTime: '12:00 pm',
            endTime: '02:00 pm',
            isSelected: false
        },
        {
            startTime: '02:00 pm',
            endTime: '04:00 pm',
            isSelected: false
        },
        {
            startTime: '04:00 pm',
            endTime: '06:00 pm',
            isSelected: false
        },
        {
            startTime: '06:00 pm',
            endTime: '08:00 pm',
            isSelected: false
        },
        {
            startTime: '08:00 pm',
            endTime: '10:00 pm',
            isSelected: false
        },
    ])

    const [isLoader, setisLoader] = useState(false);


    useEffect(() => {
        if (route?.params?.item) {
            // setName(route?.params?.item.name)
            // setDescription(route?.params?.item.description)
            // setprice(route?.params?.item.price)
            // setlastHourDiscount(route?.params?.item.lastHourDiscount)
            // let imgs = [
            //     { imagURL: route?.params?.item.image[0] ? route?.params?.item.image[0] : '' },
            //     { imagURL: route?.params?.item.image[1] ? route?.params?.item.image[1] : '' },
            //     { imagURL: route?.params?.item.image[2] ? route?.params?.item.image[2] : '' },
            //     { imagURL: route?.params?.item.image[3] ? route?.params?.item.image[3] : '' },
            //     { imagURL: route?.params?.item.image[4] ? route?.params?.item.image[4] : '' },
            //     { imagURL: route?.params?.item.image[5] ? route?.params?.item.image[5] : '' },
            // ]
            // setProductImages(imgs)
        }
        return () => {
            // Clear the state when the component unmounts
            setProductImages([
                { imagURL: '' },
                { imagURL: '' },
                { imagURL: '' },
                { imagURL: '' },
                { imagURL: '' },
                { imagURL: '' },
            ])
        };
    }, [route?.params]);

    const crossImage = async (index) => {
        const updatedImages = [...productImages];
        updatedImages[index].imagURL = '';
        setProductImages(updatedImages);
    };


    const uploadImageToStorage = async (path, name) => {
        try {
            setisLoader(true)
            let reference = storage().ref(name);
            let task = await reference.putFile(path);
            setisLoader(false)
            if (task) {
                return await reference.getDownloadURL();
            }
        } catch (error) {
            console.log('Error uploading image:', error);
            setisLoader(false)
            return null;
        }
    };

    const pickImage = async (index) => {
        try {
            let options = {
                title: 'Select Image',
                includeBase64: true,
                customButtons: [
                    {
                        name: 'customOptionKey',
                        title: 'Choose Photo from Custom Option',
                    },
                ],
                storageOptions: {
                    skipBackup: true,
                    path: 'images',
                },
                quality: 0.1,
            };
            launchImageLibrary(options, async (res) => {
                if (res.didCancel) {
                    // User canceled the image selection
                } else if (res.error) {
                    // Error occurred while selecting an image
                } else {
                    const updatedImages = [...productImages];
                    updatedImages[index].imagURL = res.assets[0].uri;
                    // updatedImages[index].imagURL = await uploadImageToStorage(res?.assets[0]?.uri, res?.assets[0]?.fileName);
                    setProductImages(updatedImages);
                }
            });
        } catch (err) {
            console.log(err);
        }
    };

    const pickImages = async () => {
        try {
            let options = {
                mediaType: 'photo',
                selectionLimit: 6, // Limit to 6 images at once
                includeBase64: false,
                customButtons: [
                    {
                        name: 'customOptionKey',
                        title: 'Choose Photo from Custom Option',
                    },
                ],
                storageOptions: {
                    skipBackup: true,
                    path: 'images',
                },
                quality: 0.1,
            };

            launchImageLibrary(options, async (res) => {
                if (res.didCancel) {
                    console.log('User canceled the image selection');
                } else if (res.error) {
                    console.log('Error occurred while selecting an image:', res.error);
                } else {
                    const selectedImages = res.assets.map(asset => asset.uri);
                    const updatedImages = [...productImages];
                    for (let i = 0; i < selectedImages.length; i++) {
                        const imageName = `image_${Date.now()}_${i}.jpg`; // Unique name for each image
                        const downloadURL = await uploadImageToStorage(selectedImages[i], imageName);
                        if (downloadURL) {
                            let imageReplaced = false;
                            let emptySlotIndex = 0;
                            // Check if there's an empty slot
                            while (emptySlotIndex < updatedImages.length) {
                                if (updatedImages[emptySlotIndex].imagURL === '') {
                                    updatedImages[emptySlotIndex].imagURL = downloadURL;
                                    imageReplaced = true;
                                    emptySlotIndex++;
                                    break;
                                }
                                emptySlotIndex++;
                            }
                            // If no empty slot was found, replace images starting from the beginning
                            if (!imageReplaced) {
                                updatedImages[i % updatedImages.length].imagURL = downloadURL;
                            }
                        }
                    }
                    setProductImages(updatedImages);
                }
            });
        } catch (err) {
            console.log('Error in pickImages:', err);
        }
    };

    const handleSelect = (value) => {
        setselectedCategories(value)
    };

    const stepsHandler = () => {
        if (isJobCreate ? step < 4 : step < 2) {
            setstep(step + 1)
        } else {
            if (isJobCreate) {
                navigation.navigate('Home')
            }
            else {
                const data = ([
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
                    },
                ])
                setstep(0)
                navigation.navigate('AdFullView', { item: data[0], isBooking: false, isReviewBooking: true, isJobCreate: isJobCreate, })
            }
        }
    }

    const backHandler = () => {
        if (step === 0) {
            navigation.goBack()
        } else {
            setstep(step - 1)
        }
    }

    const timeSlotHandler = (index) => {
        const updatedTimeSlots = timeSlots.map((slot, i) => ({
            ...slot,
            isSelected: i === index,
        }));
        settimeSlots(updatedTimeSlots);
    };

    const roomHandler = (itemValue) => {
        setroomsQty(itemValue)
        const roomCount = parseInt(itemValue.split('-')[0], 10);
        const pricePerRoom = 5;
        const totalPrice = roomCount * pricePerRoom;
        settotalPrice(totalPrice);
    }

    return (
        <View style={styles.container}>
            <CustomHeader
                title={isJobCreate ? t('createJob') : t('createService')}
                isLeft={true}
                leftPress={() => { backHandler() }}
            />

            {
                user.role !== 'provider' && <RepeatService modalVisible={modalVisible} setModalVisible={() => setModalVisible(false)} />
            }

            <InformationPopup modalVisible={informationPopup} setModalVisible={() => setinformationPopup(false)} info={1} />
            <InformationPopup modalVisible={informationPopup1} setModalVisible={() => setinformationPopup1(false)} info={2} />

            {
                step === 0 &&
                <ScrollView contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 50 }} style={{ width: '100%', }}>
                    <View style={{ width: '90%' }}>
                        {
                            isJobCreate &&
                            <>
                                <View style={styles.heading}>
                                    <TouchableOpacity
                                        onPress={() => { setinformationPopup(!informationPopup) }}
                                        activeOpacity={.8}
                                        style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 10, }}
                                    >
                                        <Text style={[Typography.text_paragraph_1, styles.headingText]}>{t('howmanyhoursdoyou')}</Text>
                                        <FontAwesome5 name="info-circle" style={{ fontSize: RFValue(18, screenResolution.screenHeight), color: colors.White_Primary_01, marginLeft: 5 }} />
                                    </TouchableOpacity>
                                </View>

                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    style={styles.horizontalScroll}
                                >
                                    <HorizontalList selectedState={selectedHour} setselectedState={setselectedHour} title={'1'} />
                                    <HorizontalList selectedState={selectedHour} setselectedState={setselectedHour} title={'2'} />
                                    <HorizontalList selectedState={selectedHour} setselectedState={setselectedHour} title={'3'} />
                                    <HorizontalList selectedState={selectedHour} setselectedState={setselectedHour} title={'4'} />
                                    <HorizontalList selectedState={selectedHour} setselectedState={setselectedHour} title={'5'} />
                                    <HorizontalList selectedState={selectedHour} setselectedState={setselectedHour} title={'6'} />
                                    <HorizontalList selectedState={selectedHour} setselectedState={setselectedHour} title={'7'} />
                                    <HorizontalList selectedState={selectedHour} setselectedState={setselectedHour} title={'8'} />
                                </ScrollView>
                                <View style={[styles.heading, { marginTop: 30 }]}>
                                    <Text style={[Typography.text_paragraph_1, styles.headingText]}>{t('howmanyprofessional')}</Text>
                                </View>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    style={styles.horizontalScroll}
                                >
                                    <HorizontalList selectedState={selectedProfessional} setselectedState={setselectedProfessional} title={'1'} />
                                    <HorizontalList selectedState={selectedProfessional} setselectedState={setselectedProfessional} title={'2'} />
                                    <HorizontalList selectedState={selectedProfessional} setselectedState={setselectedProfessional} title={'3'} />
                                    <HorizontalList selectedState={selectedProfessional} setselectedState={setselectedProfessional} title={'4'} />
                                </ScrollView>
                            </>
                        }
                        {/* <RadioButtonCat options={options} onSelect={handleSelect} /> */}
                        <View style={[styles.heading, { marginTop: 30 }]}>
                            <Text style={[Typography.text_paragraph_1, styles.headingText]}>{t('selectCategory')}</Text>
                        </View>
                        <View style={styles.listDropDown}>
                            <Select
                                bg={colors.white}
                                borderWidth={0}
                                selectedValue={categories}
                                minWidth="100%"
                                accessibilityLabel={t('selectCategory')}
                                placeholder={t('selectCategory')}
                                placeholderTextColor={colors.Neutral_01}
                                _selectedItem={{
                                    background: colors.Primary_01,
                                }}
                                color={colors.Neutral_01}
                                mt={1} onValueChange={itemValue => setcategories(itemValue)}
                            >
                                <Select.Item label="Cleaning and Hygiene Services" value="Cleaning and Hygiene Services" />
                                <Select.Item label="Home Maintenance Services" value="Home Maintenance Services" />
                                <Select.Item label="Installation Services" value="Installation Services" />
                                <Select.Item label="Renovation Services" value="Renovation Services" />
                            </Select>
                        </View>


                        {
                            categories != '' &&
                            <>
                                <View style={styles.heading}>
                                    <Text style={[Typography.text_paragraph_1, styles.headingText]}>{t('subCategories')}</Text>
                                </View>
                                <View style={styles.listDropDown}>
                                    <Select
                                        bg={colors.white}
                                        borderWidth={0}
                                        selectedValue={subcategories}
                                        minWidth="100%"
                                        accessibilityLabel={t('subCategories')}
                                        placeholder={t('subCategories')}
                                        placeholderTextColor={colors.Neutral_01}
                                        _selectedItem={{
                                            background: colors.Primary_01,
                                        }}
                                        color={colors.Neutral_01}
                                        mt={1} onValueChange={itemValue => setsubcategories(itemValue)}
                                    >
                                        <Select.Item label="Office cleaning" value="Office cleaning" />
                                        <Select.Item label="Room cleaning" value="Room cleaning" />
                                        <Select.Item label="Pest control service" value="Pest control service" />
                                        <Select.Item label="Laundry Service" value="Laundry Service" />
                                        <Select.Item label="Etc" value="Etc" />
                                    </Select>
                                </View>
                            </>
                        }

                        {
                            isJobCreate &&
                            <>
                                <View style={styles.heading}>
                                    <Text style={[Typography.text_paragraph_1, styles.headingText]}>{t('areaSize')}</Text>
                                </View>
                                <View style={styles.listDropDown}>
                                    <Select
                                        bg={colors.white}
                                        borderWidth={0}
                                        selectedValue={roomsize}
                                        minWidth="100%"
                                        accessibilityLabel="User"
                                        placeholder={t('areaSize')}
                                        placeholderTextColor={colors.Neutral_01}
                                        _selectedItem={{
                                            background: colors.Primary_01,
                                        }}
                                        color={colors.Neutral_01}
                                        mt={1} onValueChange={itemValue => setroomsize(itemValue)}
                                    >
                                        <Select.Item label="Less than 50 m2" value="Less than 50 m2" />
                                        <Select.Item label="51 - 100 m2" value="51 - 100 m2" />
                                        <Select.Item label="101 - 150 m2" value="101 - 150 m2" />
                                        <Select.Item label="151 - 200 m2" value="151 - 200 m2" />
                                        <Select.Item label="Over 200 m2" value="Over 200 m2" />
                                    </Select>
                                </View>
                            </>
                        }

                        {
                            isJobCreate &&
                            <>
                                <View style={styles.heading}>
                                    <Text style={[Typography.text_paragraph_1, styles.headingText]}>{t('roomsNumber')}</Text>
                                </View>
                                <View style={styles.listDropDown}>
                                    <Select
                                        bg={colors.white}
                                        borderWidth={0}
                                        selectedValue={roomsQty}
                                        minWidth="100%"
                                        accessibilityLabel="User"
                                        placeholder={t('roomsNumber')}
                                        placeholderTextColor={colors.Neutral_01}
                                        _selectedItem={{
                                            background: colors.Primary_01,
                                        }}
                                        color={colors.Neutral_01}
                                        // mt={1} onValueChange={itemValue => setroomsQty(itemValue)}
                                        mt={1} onValueChange={itemValue => roomHandler(itemValue)}

                                    >
                                        <Select.Item label="Studio" value="Studio" />
                                        <Select.Item label="1 Room" value="1 Room" />
                                        <Select.Item label="2 Rooms" value="2 Rooms" />
                                        <Select.Item label="3 Rooms" value="3 Rooms" />
                                        <Select.Item label="4 Rooms" value="4 Rooms" />
                                        <Select.Item label="5 Rooms" value="5 Rooms" />
                                    </Select>
                                </View>
                            </>
                        }

                        {
                            isJobCreate &&
                            <>
                                <TouchableOpacity
                                    onPress={() => { setinformationPopup1(!informationPopup1) }}
                                    activeOpacity={.8}
                                    style={{ flexDirection: 'row', marginTop: 30, }}
                                >
                                    <Text style={[Typography.text_paragraph_1, styles.headingText, {}]}>{t('needCleaningMaterials')}</Text>
                                    <FontAwesome5 name="info-circle" style={{ fontSize: RFValue(18, screenResolution.screenHeight), color: colors.White_Primary_01, marginLeft: 5 }} />
                                </TouchableOpacity>

                                <View style={{ width: '100%', flexDirection: 'row', marginTop: 20 }}>
                                    <BookingStatusTab selectedState={selectedTab} setselectedState={setselectedTab} title={t('noIhavethem')} />
                                    <BookingStatusTab selectedState={selectedTab} setselectedState={setselectedTab} title={t('yesPlease')} />
                                </View>
                            </>
                        }

                        {
                            isJobCreate &&
                            <AdditionalServices />
                        }

                    </View>
                </ScrollView>
            }

            {
                step === 1 &&
                <ScrollView contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 50 }} style={{ width: '100%', }}>
                    {
                        !isJobCreate &&
                        <View style={{ width: '90%' }}>
                            <View style={styles.heading}>
                                <Text style={[Typography.text_paragraph_1, styles.headingText]}>{t('adfixedrate')}</Text>
                            </View>
                            <View style={styles.listDropDown}>
                                <Select
                                    bg={colors.white}
                                    borderWidth={0}
                                    selectedValue={rates}
                                    minWidth="100%"
                                    accessibilityLabel="User"
                                    placeholder={t('adfixedrate')}
                                    placeholderTextColor={colors.Neutral_01}
                                    _selectedItem={{
                                        background: colors.Primary_01,
                                    }}
                                    color={colors.Neutral_01}
                                    mt={1} onValueChange={itemValue => setrates(itemValue)}
                                >
                                    <Select.Item label="5 Euro" value="5" />
                                    <Select.Item label="7 Euro" value="7" />
                                    <Select.Item label="8 Euro" value="8" />
                                    <Select.Item label="9 Euro" value="9" />
                                    <Select.Item label="10 Euro" value="10" />
                                    <Select.Item label="11 Euro" value="11" />
                                    <Select.Item label="12 Euro" value="12" />
                                    <Select.Item label="13 Euro" value="13" />
                                    <Select.Item label="14 Euro" value="14" />
                                    <Select.Item label="15 Euro" value="15" />
                                </Select>
                            </View>
                        </View>
                    }

                    {
                        !isJobCreate &&
                        <View style={{ width: '90%' }}>
                            <View style={styles.heading}>
                                <Text style={[Typography.text_paragraph_1, styles.headingText]}>{t('description')}</Text>
                            </View>
                            <View style={styles.textAreaContainer}>
                                <TextInput
                                    keyboardType="default"
                                    style={{ height: '100%', width: '100%', textAlignVertical: 'top', color: colors.black }}
                                    value={description}
                                    onChangeText={(e) => { setdescription(e) }}
                                    placeholder={t('description')}
                                    placeholderTextColor={colors.Neutral_01}
                                    multiline={true}
                                />
                            </View>
                        </View>
                    }

                    <View style={{ width: '90%', marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity
                            activeOpacity={.8}
                        >
                            <Text style={[Typography.text_paragraph_1, styles.headingText]}>{t('photos')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            // onPress={pickImages}
                            style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
                            activeOpacity={.8}
                        >
                            <Ionicons color={colors.White_Primary_01} name={'add-circle-outline'} size={22} style={{ top: 2, marginRight: 5 }} />

                            <Text style={[Typography.text_paragraph_1, styles.headingText]}>{t('photos')}</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={{ width: '90%' }}>
                        <FlatList
                            data={productImages}
                            numColumns={3}
                            contentContainerStyle={{}}
                            columnWrapperStyle={styles.columnWrapperStyle}
                            renderItem={({ item, index }) => (
                                <View style={styles.imageContainer}>
                                    {
                                        item?.imagURL ? (
                                            <>
                                                <Image source={{ uri: item?.imagURL }} style={{ height: '100%', width: '100%' }} />
                                                <TouchableOpacity onPress={async () => { crossImage(index) }}
                                                    style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', position: 'absolute', }}>
                                                    <Entypo color={colors.White_Primary_01} name={'cross'} size={30} />
                                                </TouchableOpacity>
                                            </>
                                        ) : (
                                            (isLoader === true) ? (
                                                <ActivityIndicator color={'#000000'} />
                                            ) : (
                                                <TouchableOpacity
                                                    onPress={async () => { await pickImage(index) }}
                                                >
                                                    <AntDesign color={colors.White_Primary_01} name={'plus'} size={30} />
                                                </TouchableOpacity>
                                            )
                                        )
                                    }
                                </View>
                            )}
                            keyExtractor={(item, index) => index.toString()}
                        />
                        <View style={styles.list}>
                            <Text style={[Typography.text_paragraph_1, { fontWeight: 'bold', color: colors.black, }]}>{t('location')}</Text>
                            <MapSmall width={'100%'} marginTop={10} />
                        </View>
                    </View>
                </ScrollView>
            }

            {
                step === 2 &&
                <View style={styles.body}>
                    {
                        !isJobCreate &&
                        <View style={{ width: '90%' }}>
                            <WeekTimeSelector theme={theme} colors={colors} />
                        </View>
                    }

                    {
                        isJobCreate &&
                        <View style={{ width: '90%', }}>
                            {/* Heading */}
                            <View style={styles.heading}>
                                <Text style={[Typography.text_paragraph_1, styles.headingText]}>{t('whenwouldyoulike')}</Text>
                            </View>

                            {/* Date Section */}
                            <View style={{ width: '100%', marginTop: 10 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={[styles.fieldHeading, { color: colors.Neutral_01 }]}>{t('selectDate')}</Text>
                                    {isError && <Text style={{ top: 3, color: "red", top: -1 }}>*</Text>}
                                </View>

                                <View style={styles.list1}>
                                    <View style={styles.dob}>
                                        {/* Date Picker */}
                                        <TouchableOpacity onPress={() => { setopenBs(true) }}  >
                                            {!showBs && <Text style={[styles.listText, { marginLeft: 10, color: colors.Neutral_01 }]}>{t('selectDate')}</Text>}
                                            {showBs && <Text style={[styles.listText, { marginLeft: 10, color: colors.black }]}>{moment(date).format('DD MM YYYY')}</Text>}
                                        </TouchableOpacity>

                                        <DatePicker
                                            minimumDate={new Date()}
                                            mode='date'
                                            modal
                                            open={openBs}
                                            date={date}
                                            onConfirm={(date) => {
                                                setopenBs(false);
                                                setDate(date);
                                                setshowBs(true);
                                            }}
                                            onCancel={() => {
                                                setopenBs(false);
                                                setshowBs(false);
                                            }}
                                        />

                                        {/* Date Icon */}
                                        <TouchableOpacity onPress={() => { setopenBs(true) }}>
                                            <Fontisto name="date" style={styles.listIcon} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                            {/* Time Section */}
                            <View style={styles.heading}>
                                <Text style={[styles.listText, { color: colors.Neutral_01 }]}>{t('selectTime')}</Text>
                            </View>

                            {/* Time Slots */}
                            <FlatList
                                data={timeSlots}
                                contentContainerStyle={[styles.timeFlatList,]}
                                numColumns={3}
                                columnWrapperStyle={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item, index }) => (
                                    <TouchableOpacity
                                        activeOpacity={.8}
                                        style={[
                                            styles.timeContainer,
                                            { borderColor: item.isSelected ? colors.White_Primary_01 : colors.Neutral_02 },
                                        ]}
                                        onPress={() => timeSlotHandler(index)}
                                    >
                                        <Text style={[styles.listText, { color: colors.black, fontSize: RFValue(12, screenResolution.screenHeight) }]}>{item.startTime}</Text>
                                        <Text style={[styles.listText, { color: colors.black, fontSize: RFValue(12, screenResolution.screenHeight) }]}>{t('to')}</Text>
                                        <Text style={[styles.listText, { color: colors.black, fontSize: RFValue(12, screenResolution.screenHeight) }]}>{item.endTime}</Text>
                                    </TouchableOpacity>
                                )}
                            />

                            {/* <FlatList
                                data={timeSlots}
                                contentContainerStyle={[styles.timeFlatList,]}
                                numColumns={3}
                                columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: '5%', alignItems: 'flex-start' }}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item, index }) => (
                                    <TouchableOpacity
                                        activeOpacity={.8}
                                        style={[
                                            styles.timeContainer,
                                            { borderColor: item.isSelected ? colors.White_Primary_01 : colors.Neutral_02 },
                                        ]}
                                        onPress={() => timeSlotHandler(index)}
                                    >
                                        <Text style={[styles.listText, { color: colors.black, fontSize: RFValue(12, screenResolution.screenHeight) }]}>{item.startTime}</Text>
                                        <Text style={[styles.listText, { color: colors.black, fontSize: RFValue(12, screenResolution.screenHeight) }]}>{t('to')}</Text>
                                        <Text style={[styles.listText, { color: colors.black, fontSize: RFValue(12, screenResolution.screenHeight) }]}>{item.endTime}</Text>
                                    </TouchableOpacity>
                                )}
                            /> */}

                        </View>
                    }

                </View>
            }

            {
                step === 3 &&
                <View style={styles.body}>
                    <View style={{ width: '90%', }}>
                        <View style={styles.heading}>
                            <Text style={[Typography.text_paragraph_1, styles.headingText]}>{t('location')}</Text>
                        </View>
                        <View style={styles.inputContiner}>
                            <TextInput
                                keyboardType='number-pad'
                                style={{ color: colors.black }}
                                value={location}
                                onChangeText={(e) => { setlocation(e) }}
                                placeholder={t('location')}
                                placeholderTextColor={colors.Neutral_01}
                            />
                            <Feather name="map-pin" style={styles.listIcon} />
                        </View>
                        <View style={styles.heading}>
                            <Text style={[Typography.text_paragraph_1, styles.headingText]}>{t('anyspecificinstruction')}</Text>
                        </View>
                        <View style={styles.textAreaContainer}>
                            <TextInput
                                keyboardType="default"
                                style={{ height: '100%', width: '100%', textAlignVertical: 'top', color: colors.black }}
                                value={instructions}
                                onChangeText={(e) => { setinstructions(e) }}
                                placeholder={t('yourtext')}
                                placeholderTextColor={colors.Neutral_01}
                                multiline={true}
                            />
                        </View>
                    </View>
                </View>
            }

            {
                step === 4 &&
                <ScrollView contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 50 }} style={{ width: '100%', }}>
                    <View style={{ width: '90%', }}>

                        <View style={[styles.heading, { marginTop: 20 }]}>
                            <Text style={[Typography.text_paragraph_1, styles.headingText]}>{t('service')}</Text>
                            <Text style={[Typography.text_paragraph_1, styles.editText]}>{'Cleaning at Home'}</Text>
                        </View>

                        <View style={[styles.heading, { marginTop: 20 }]}>
                            <Text style={[Typography.text_paragraph_1, styles.headingText]}>{t('description')}</Text>
                            <Text style={[Typography.text_paragraph_1, styles.editText]}>{'This is text description'}</Text>
                        </View>

                        <View style={[styles.heading, { marginTop: 20 }]}>
                            <Text style={[Typography.text_paragraph_1, styles.headingText]}>{t('cleaners')}</Text>
                            <Text style={[Typography.text_paragraph_1, styles.editText]}>{'3'}</Text>
                        </View>

                        <View style={[styles.heading, { marginTop: 20 }]}>
                            <Text style={[Typography.text_paragraph_1, styles.headingText]}>{t('workFrequency')}</Text>
                            <Text style={[Typography.text_paragraph_1, styles.editText]}>{'Weekly'}</Text>
                        </View>

                        <View style={[styles.heading, { marginTop: 20 }]}>
                            <Text style={[Typography.text_paragraph_1, styles.headingText]}>{t('areaSize')}</Text>
                            <Text style={[Typography.text_paragraph_1, styles.editText]}>{'51 - 100 m2'}</Text>
                        </View>

                        <View style={[styles.heading, { marginTop: 20 }]}>
                            <Text style={[Typography.text_paragraph_1, styles.headingText]}>{t('roomsNumber')}</Text>
                            <Text style={[Typography.text_paragraph_1, styles.editText]}>{'1 Room'}</Text>
                        </View>

                        <View style={[styles.heading, { marginTop: 20 }]}>
                            <Text style={[Typography.text_paragraph_1, styles.headingText]}>{t('needCleaningMaterials')}</Text>
                            <Text style={[Typography.text_paragraph_1, styles.editText]}>{'Yes Please'}</Text>
                        </View>

                        <View style={[styles.heading, { marginTop: 20 }]}>
                            <Text style={[Typography.text_paragraph_1, styles.headingText]}>{t('price')}</Text>
                            <Text style={[Typography.text_paragraph_1, styles.editText]}>{'€30/hr'}</Text>
                        </View>

                        <View style={[styles.heading, { marginTop: 20 }]}>
                            <Text style={[Typography.text_paragraph_1, styles.headingText]}>{t('selectDate')}</Text>
                            <Text style={[Typography.text_paragraph_1, styles.editText,]}>{'8 Jan, 2024'}</Text>
                        </View>

                        <View style={[styles.heading, { marginTop: 20 }]}>
                            <Text style={[Typography.text_paragraph_1, styles.headingText]}>{t('selectTime')}</Text>
                            <Text style={[Typography.text_paragraph_1, styles.editText]}>{'10:00 AM - 12:00 AM'}</Text>
                        </View>

                        <View style={[styles.heading, { marginTop: 20 }]}>
                            <Text style={[Typography.text_paragraph_1, styles.headingText]}>{t('location')}</Text>
                            <Text style={[Typography.text_paragraph_1, styles.editText]}>{'Jameria Residence'}</Text>
                        </View>

                        <View style={styles.taxContainer}>
                            <Text style={[Typography.text_CTA1, { color: colors.black, }]}>{t('pay') + ':'}</Text>

                            <View style={styles.taxContainer_C1}>
                                <Text style={[Typography.text_CTA1, { color: colors.Neutral_01, }]}>{t('amount')}</Text>
                                <Text style={[Typography.text_CTA1, { color: colors.black, }]}>{'€450'}</Text>
                            </View>

                            <View style={styles.taxContainer_C1}>
                                <Text style={[Typography.text_CTA1, { color: colors.Neutral_01, }]}>{t('vat')}</Text>
                                <Text style={[Typography.text_CTA1, { color: colors.black, }]}>{'€50'}</Text>
                            </View>

                            <View style={styles.taxContainer_C1}>
                                <Text style={[Typography.text_CTA1, { color: colors.Neutral_01, }]}>{t('total')}</Text>
                                <Text style={[Typography.text_CTA1, { color: colors.black, }]}>{'€500'}</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            }


            {/* <View style={styles.footer}>
                <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between', }}>
                    <CTAButton1 title={t('next')} submitHandler={() => { stepsHandler() }} />
                </View>
            </View> */}

            <View style={styles.footer}>
                <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between', }}>

                    {
                        (roomsQty != '') ? (
                            <>
                                <View style={{ width: '45%', justifyContent: 'center', }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={[Typography.text_paragraph_1, styles.headingText]}>{t('total') + ': '}</Text>
                                        <Text style={[Typography.text_paragraph_1, styles.headingText]}>{'€' + ' '}</Text>

                                        {
                                            selectedTab === t('yesPlease') && <Text style={[Typography.text_paragraph_1, styles.headingText]}>{totalPrice + 5}</Text>
                                        }
                                        {
                                            selectedTab !== t('yesPlease') && <Text style={[Typography.text_paragraph_1, styles.headingText]}>{totalPrice}</Text>
                                        }
                                    </View>
                                </View>
                                <View style={{ width: '45%', }}>
                                    <CTAButton1 title={step < 4 ? t('next') : t('book')} submitHandler={() => { stepsHandler() }} />
                                </View>
                            </>

                        ) : (<CTAButton1 title={step < 4 ? t('next') : t('book')} submitHandler={() => { stepsHandler() }} />)
                    }
                    {/* <CTAButton1 title={step < 3 ? t('next') : t('book')} submitHandler={() => { stepsHandler() }} /> */}
                </View>
            </View>
        </View>
    );
};

export default CreateService;

const createStyles = (colors, theme, deviceWidth) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        body: {
            flex: 10,
            width: '100%',
            justifyContent: 'flex-start',
            alignItems: 'center',
        },
        footer: {
            // flex: 2,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 20,
            backgroundColor: colors.white,
            borderTopColor: colors.Neutral_02,
            borderTopWidth: .3,
            paddingTop: 5
        },
        heading: {
            width: '100%',
            marginTop: 10,
        },
        headingText: {
            fontWeight: 'bold',
            color: colors.black,
            textAlign: 'left'
        },
        editText: {
            fontSize: RFValue(14, screenResolution.screenHeight),
            textAlign: 'left',
            color: colors.black
        },
        horizontalScroll: {
            flexDirection: 'row',
            marginTop: 10,
            width: '100%',
            height: 40,
        },
        textAreaContainer: {
            marginTop: 10,
            height: 185,
            width: '100%',
            borderRadius: 5,
            padding: 10,
            justifyContent: 'center',
            alignItems: 'flex-start',
            backgroundColor: colors.white,
            borderColor: colors.Primary_01,
            borderWidth: 1
        },
        // list: {
        //     marginTop: 10,
        //     flexDirection: 'row',
        //     alignItems: 'center',
        //     justifyContent: 'space-between',
        //     padding: 10,
        //     width: '100%',
        //     borderRadius: 5,
        //     height: 50,
        //     overflow: 'hidden',
        //     backgroundColor: colors.white,
        //     borderColor: colors.Primary_01,
        //     borderWidth: 1,
        // },
        list: {
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'flex-start',
            width: '100%'
        },

        list1: {
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
            width: '100%',
            borderRadius: 5,
            height: 50,
            overflow: 'hidden',
            backgroundColor: colors.white,
            borderColor: colors.Primary_01,
            borderWidth: 1,
        },
        dob: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%'
        },
        timeContainer: {
            margin: 10,
            height: 78,
            width: 90,
            borderWidth: 1,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.Neutral_02
        },
        timeFlatList: {
            // width: '100%',
            marginTop: 10,
            alignSelf: 'center',
            // backgroundColor: 'red'
            // alignItems:'center',
            // marginHorizontal: '5%',
        },
        inputContiner: {
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingLeft: 10,
            backgroundColor: colors.white,
            borderColor: colors.Primary_01,
            borderRadius: 5,
            borderWidth: 1,
            marginTop: 10,
        },
        listIcon: {
            fontSize: RFValue(18, screenResolution.screenHeight),
            marginRight: 15,
            color: colors.Neutral_01
        },
        taxContainer: {
            height: 185,
            width: '100%',
            padding: 10,
            marginTop: 20,
            borderRadius: 5,
            justifyContent: 'space-around',
            alignItems: 'flex-start',
            backgroundColor: colors.Neutral_02
        },
        taxContainer_C1: {
            width: '100%',
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
        },
        columnWrapperStyle: {
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
            height: 120,
        },
        imageContainer: {
            flex: 1,
            height: deviceWidth < 360 ? 100 : 120,
            borderRadius: 8,
            overflow: 'hidden',
            backgroundColor: colors.Neutral_02,
            justifyContent: 'center',
            alignItems: 'center'
        },
        listDropDown: {
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
            borderColor: colors.Primary_01,
            borderWidth: 1,
            borderRadius: 7,
            height: 50,
            overflow: 'hidden',
            backgroundColor: colors.white
        },

    });
};
