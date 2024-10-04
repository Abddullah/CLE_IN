import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import DatePicker from 'react-native-date-picker';
import { t } from 'i18next';

const WeekdayTimeSelector = ({ theme, colors }) => {
    const [days, setDays] = useState({
        Monday: { enabled: false, openingTime: null, closingTime: null },
        Tuesday: { enabled: false, openingTime: null, closingTime: null },
        Wednesday: { enabled: false, openingTime: null, closingTime: null },
        Thursday: { enabled: false, openingTime: null, closingTime: null },
        Friday: { enabled: false, openingTime: null, closingTime: null },
        Saturday: { enabled: false, openingTime: null, closingTime: null },
        Sunday: { enabled: false, openingTime: null, closingTime: null },
    });

    const [isPickerVisible, setPickerVisible] = useState(false);
    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedType, setSelectedType] = useState(null); // 'openingTime' or 'closingTime'

    const handleDayToggle = (day) => {
        setDays((prevDays) => ({
            ...prevDays,
            [day]: { ...prevDays[day], enabled: !prevDays[day].enabled },
        }));
    };

    const handleTimeChange = (day, type, time) => {
        setDays((prevDays) => ({
            ...prevDays,
            [day]: { ...prevDays[day], [type]: time },
        }));
        setPickerVisible(false);
    };

    const showTimePicker = (day, type) => {
        setSelectedDay(day);
        setSelectedType(type);
        setPickerVisible(true);
    };

    const renderDayRow = (day) => (
        <View style={styles.row} key={day}>
            {/* Day with Checkbox */}
            <View style={styles.column}>
                <CheckBox
                    tintColors={{
                        true: theme === 'dark' ? colors.Neutral_01 : colors.Primary_01,
                        false: colors.Neutral_01,
                    }}
                    disabled={false}
                    value={days[day].enabled}
                    onValueChange={() => handleDayToggle(day)}
                />
                <Text style={[styles.text, { color: colors.Neutral_01 }]}>{day}</Text>
            </View>

            {/* Opening Time */}
            <View style={styles.column}>
                <TouchableOpacity
                    style={[
                        styles.timeBox,
                        { borderColor: days[day].enabled ? colors.White_Primary_01 : colors.Neutral_02 },
                    ]}
                    disabled={!days[day].enabled}
                    onPress={() => showTimePicker(day, 'openingTime')}
                >
                    <Text style={{ color: colors.Neutral_01 }}>
                        {days[day].openingTime
                            ? days[day].openingTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                            : 'Select Time'}
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Closing Time */}
            <View style={styles.column}>
                <TouchableOpacity
                    style={[
                        styles.timeBox,
                        { borderColor: days[day].enabled ? colors.White_Primary_01 : colors.Neutral_02 },
                    ]}
                    disabled={!days[day].enabled}
                    onPress={() => showTimePicker(day, 'closingTime')}
                >
                    <Text style={{ color: colors.Neutral_01 }}>
                        {days[day].closingTime
                            ? days[day].closingTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                            : 'Select Time'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            {/* Header Row */}
            <View style={styles.headerRow}>
                <View style={styles.column}>
                    <Text style={[styles.heading, { color: colors.Neutral_01 }]}>{'Time Slot'}</Text>
                </View>
                <View style={styles.column}>
                    <Text style={[styles.heading, { color: colors.Neutral_01 }]}>{t('openingTime')}</Text>
                </View>
                <View style={styles.column}>
                    <Text style={[styles.heading, { color: colors.Neutral_01 }]}>{t('closingTime')}</Text>
                </View>
            </View>

            <ScrollView contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 100 }} style={{ width: '100%', }} showsVerticalScrollIndicator={false}>
                {/* Days and Time Selection */}
                {Object.keys(days).map((day) => renderDayRow(day))}

                {/* DatePicker Modal */}
                {isPickerVisible && (
                    <DatePicker
                        modal
                        open={isPickerVisible}
                        date={days[selectedDay][selectedType] || new Date()}
                        mode="time"
                        onConfirm={(time) => handleTimeChange(selectedDay, selectedType, time)}
                        onCancel={() => setPickerVisible(false)}
                    />
                )}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        padding: 10,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    column: {
        flex: 1,
        alignItems: 'center',
    },
    heading: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 16,
    },
    timeBox: {
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 100,
    },
});

export default WeekdayTimeSelector;


