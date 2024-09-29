
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import { colors } from '../utilities/constants';
import { Typography } from '../utilities/constants/constant.style';

const VerticalStarList = ({ }) => {
    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity
                activeOpacity={.8}
                style={styles.ratingLineContainer}
            >
                <View style={styles.ratingLineContainer_C1}>
                    <Text style={[Typography.text_paragraph_1, { color: colors.black, fontSize: 16, }]}>{'5'}</Text>
                </View>
                <View style={styles.ratingLineContainer_C2}>
                    <View style={styles.line} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={.8}
                style={styles.ratingLineContainer}
            >
                <View style={styles.ratingLineContainer_C1}>
                    <Text style={[Typography.text_paragraph_1, { color: colors.black, fontSize: 16, }]}>{'4'}</Text>
                </View>
                <View style={styles.ratingLineContainer_C2}>
                    <View style={[styles.line, { width: '80%' }]} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={.8}
                style={styles.ratingLineContainer}
            >
                <View style={styles.ratingLineContainer_C1}>
                    <Text style={[Typography.text_paragraph_1, { color: colors.black, fontSize: 16, }]}>{'3'}</Text>
                </View>
                <View style={styles.ratingLineContainer_C2}>
                    <View style={[styles.line, { width: '60%' }]} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={.8}
                style={styles.ratingLineContainer}
            >
                <View style={styles.ratingLineContainer_C1}>
                    <Text style={[Typography.text_paragraph_1, { color: colors.black, fontSize: 16, }]}>{'2'}</Text>
                </View>
                <View style={styles.ratingLineContainer_C2}>
                    <View style={[styles.line, { width: '40%' }]} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={.8}
                style={styles.ratingLineContainer}
            >
                <View style={styles.ratingLineContainer_C1}>
                    <Text style={[Typography.text_paragraph_1, { color: colors.black, fontSize: 16, }]}>{'1'}</Text>
                </View>
                <View style={styles.ratingLineContainer_C2}>
                    <View style={[styles.line, { width: '10%' }]} />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default VerticalStarList;

const styles = StyleSheet.create({
    ratingLineContainer: {
        flexDirection: 'row',
        height: 40,
        width: '100%',
    },
    ratingLineContainer_C1: {
        flex: 2, justifyContent: 'center', alignItems: 'center',
    },
    ratingLineContainer_C2: {
        flex: 8,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    line: {
        height: 2,
        backgroundColor: colors.yellow,
        width: '100%',
    },
});


