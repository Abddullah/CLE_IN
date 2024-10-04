import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity, FlatList, ActivityIndicator, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CustomHeader from '../../components/Header';
import { t } from 'i18next';
import CTAButton1 from '../../components/CTA_BUTTON1';
import { Typography } from '../../utilities/constants/constant.style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign'
import moment from 'moment';
import RadioButtonCat from '../../components/Radio_Button_Cat';
import Entypo from 'react-native-vector-icons/Entypo'
import { MapSmall } from '../../assets/icons';
import { launchImageLibrary } from 'react-native-image-picker';
import { LightThemeColors, DarkThemeColors } from '../../utilities/constants';
import { useTheme } from '../../../ThemeContext';
import WeekTimeSelector from '../../components/WeekTimeSelector';
import Images from '../../assets/images/index'

const CreateService = ({ navigation, route }) => {
    const { theme, toggleTheme } = useTheme();
    const colors = theme === 'dark' ? DarkThemeColors : LightThemeColors;
    const styles = createStyles(colors, theme);

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
    const [rates, setrates] = useState('');
    const [description, setdescription] = useState('');
    const [location, setlocation] = useState('')
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
        if (step < 2) {
            setstep(step + 1)
        } else {

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
            navigation.navigate('AdFullView', { item: data[0], isBooking: false, isReviewBooking: true })
            setstep(0)
        }
    }

    const backHandler = () => {
        if (step === 0) {
            navigation.goBack()
        } else {
            setstep(step - 1)
        }
    }

    return (
        <View style={styles.container}>
            <CustomHeader
                title={t('createService')}
                isLeft={true}
                leftPress={() => { backHandler() }}
            />

            {
                step === 0 &&
                <View style={styles.body}>
                    <View style={{ width: '90%' }}>
                        <View style={styles.heading}>
                            <Text style={[Typography.text_paragraph_1, styles.headingText]}>{t('selectCategory')}</Text>
                        </View>
                        <RadioButtonCat options={options} onSelect={handleSelect} />
                    </View>
                </View>
            }

            {
                step === 1 &&
                <ScrollView contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 50 }} style={{ width: '100%', }}>

                    <View style={{ width: '90%' }}>
                        <View style={styles.heading}>
                            <Text style={[Typography.text_paragraph_1, styles.headingText]}>{t('adfixedrate')}</Text>
                        </View>
                        <View style={styles.inputContiner}>
                            <TextInput
                                keyboardType='number-pad'
                                style={{ color: colors.black }}
                                value={rates}
                                onChangeText={(e) => { setrates(e) }}
                                placeholder={t('adfixedrate')}
                                placeholderTextColor={colors.Neutral_01}
                            />
                        </View>
                    </View>
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
                    <View style={{ width: '90%' }}>
                        <WeekTimeSelector theme={theme} colors={colors} />
                    </View>
                </View>
            }




            <View style={styles.footer}>
                <View style={{ width: '90%', }}>
                    <CTAButton1 title={step < 4 ? t('next') : t('book')} submitHandler={() => { stepsHandler() }} />
                </View>
            </View>
        </View>
    );
};

export default CreateService;

const createStyles = (colors, theme) => {
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
            marginBottom: 20
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
            fontSize: 14,
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
            marginTop: 10,
            width: '90%',
            marginHorizontal: '5%',
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
            fontSize: 18,
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
            height: 120,
            borderRadius: 8,
            overflow: 'hidden',
            backgroundColor: colors.Neutral_02,
            justifyContent: 'center',
            alignItems: 'center'
        },

    });
};
