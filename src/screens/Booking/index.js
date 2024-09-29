import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CustomHeader from '../../components/Header';
import { t } from 'i18next';
import { colors } from '../../utilities/constants';
import CTAButton1 from '../../components/CTA_BUTTON1';
import { Typography } from '../../utilities/constants/constant.style';
import HorizontalList from '../../components/horizontalList';
import DatePicker from 'react-native-date-picker';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import moment from 'moment';

const Booking = ({ navigation }) => {
    let isError = useSelector((state) => state.reducer.isError);
    const [selectedHour, setselectedHour] = useState('');
    const [selectedProfessional, setselectedProfessional] = useState('');
    const [step, setstep] = useState(0);
    const [instructions, setinstructions] = useState('');
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
    const [location, setlocation] = useState('')

    const timeSlotHandler = (index) => {
        const updatedTimeSlots = timeSlots.map((slot, i) => ({
            ...slot,
            isSelected: i === index,
        }));
        settimeSlots(updatedTimeSlots);
    };

    const stepsHandler = () => {
        setstep(step + 1)
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
                title={t('bookservice')}
                isLeft={true}
                leftPress={() => { backHandler() }}
            />

            {
                step === 0 &&
                <View style={styles.body}>
                    <View style={{ width: '90%', }}>
                        <View style={styles.heading}>
                            <Text style={[Typography.text_paragraph_1, styles.headingText]}>{t('howmanyhoursdoyou')}</Text>
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
                            <HorizontalList selectedState={selectedHour} setselectedState={setselectedHour} title={'9'} />
                            <HorizontalList selectedState={selectedHour} setselectedState={setselectedHour} title={'10'} />
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
                            <HorizontalList selectedState={selectedProfessional} setselectedState={setselectedProfessional} title={'5'} />
                        </ScrollView>
                    </View>
                </View>
            }

            {
                step === 1 &&
                <View style={styles.body}>
                    <View style={{ width: '90%' }}>
                        <View style={styles.heading}>
                            <Text style={[Typography.text_paragraph_1, styles.headingText]}>{t('anyspecificinstruction')}</Text>
                        </View>
                        <View style={styles.textAreaContainer}>
                            <TextInput
                                keyboardType="default"
                                style={{ height: '100%', width: '100%', textAlignVertical: 'top' }}
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
                step === 2 &&
                <View style={styles.body}>
                    <View style={{ width: '90%', }}>
                        <View style={styles.heading}>
                            <Text style={[Typography.text_paragraph_1, styles.headingText]}>{t('whenwouldyoulike')}</Text>
                        </View>

                        <View style={{ width: '100%', marginTop: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.fieldHeading}>{t('selectDate')}</Text>
                                {
                                    isError && <Text style={{ top: 3, color: "red", top: -1 }}>*</Text>
                                }
                            </View>
                            <View style={styles.list}>
                                <View style={styles.dob}>
                                    <TouchableOpacity onPress={() => { setopenBs(true) }}  >
                                        {
                                            !showBs && <Text style={[styles.listText, { marginLeft: 10, color: colors.Neutral_01 }]}>{t('selectDate')}</Text>
                                        }
                                        {
                                            showBs && <Text style={[styles.listText, { marginLeft: 10, color: colors.black }]}>{moment(date).format('DD MM YYYY')}</Text>
                                        }
                                    </TouchableOpacity>
                                    <DatePicker
                                        minimumDate={new Date()}
                                        mode='date'
                                        modal
                                        open={openBs}
                                        date={date}
                                        onConfirm={(date) => {
                                            setopenBs(false)
                                            setDate(date)
                                            setshowBs(true)
                                        }}
                                        onCancel={() => {
                                            setopenBs(false)
                                            setshowBs(false)
                                        }}
                                    />
                                    <TouchableOpacity onPress={() => { setopenBs(true) }}>
                                        <Fontisto name="date" style={styles.listIcon} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={styles.heading}>
                            <Text style={[styles.listText, { color: colors.Neutral_01 }]}>{t('selectTime')}</Text>
                        </View>

                        <FlatList
                            data={timeSlots}
                            contentContainerStyle={styles.timeFlatList}
                            numColumns={3}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item, index }) =>
                                <TouchableOpacity
                                    activeOpacity={.8}
                                    style={[styles.timeContainer, { borderColor: item.isSelected ? colors.Primary_01 : colors.Neutral_02, }]}
                                    onPress={() => timeSlotHandler(index)}

                                >
                                    <Text style={[styles.listText, { color: colors.black }]}>{timeSlots[0].startTime}</Text>
                                    <Text style={[styles.listText, { color: colors.black }]}>{t('to')}</Text>
                                    <Text style={[styles.listText, { color: colors.black }]}>{timeSlots[0].endTime}</Text>

                                </TouchableOpacity>
                            }
                        />

                    </View>
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
                                style={styles.input}
                                value={location}
                                onChangeText={(e) => { setlocation(e) }}
                                placeholder={t('location')}
                                placeholderTextColor={colors.Neutral_01}
                            />
                            <Feather name="map-pin" style={styles.listIcon} />
                        </View>

                        <View style={styles.heading}>
                            <Text style={[Typography.text_paragraph_1, styles.headingText]}>{t('addNote')}</Text>
                        </View>
                        <View style={styles.textAreaContainer}>
                            <TextInput
                                keyboardType="default"
                                style={{ height: '100%', width: '100%', textAlignVertical: 'top' }}
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

            <View style={styles.footer}>
                <View style={{ width: '90%', marginBottom: 20 }}>
                    <CTAButton1 title={t('next')} submitHandler={() => { stepsHandler() }} />
                </View>
            </View>
        </View>
    );
};

export default Booking;

const styles = StyleSheet.create({
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
        flex: 2,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
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
    list: {
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
    },
});




