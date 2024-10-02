
import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image, } from 'react-native';
import Images from '../assets/images/index'
import { colors } from '../utilities/constants';
import { LightThemeColors, DarkThemeColors } from '../utilities/constants';
import { useTheme } from '../../ThemeContext';

const ChatBox = ({ }) => {
    const { theme } = useTheme();
    const colors = theme === 'dark' ? DarkThemeColors : LightThemeColors;
    const styles = createStyles(colors, theme);

    return (
        <ScrollView style={styles.wrapper} contentContainerStyle={{ paddingBottom: 30 }}>

            <View style={{ marginTop: 10, alignItems: 'flex-start', }}>
                <View style={[styles.msgContainer, { backgroundColor: colors.Neutral_05 }]}>
                    <Image
                        source={Images.noPhoto}
                        style={{ width: 40, height: 40, borderRadius: 50 }}
                        resizeMode="contain"
                    />
                    <View style={{ marginLeft: 20, maxWidth: '75%', }}>
                        <Text style={{ textAlign: 'left', color: colors.black }}>You haven't started chat yet. ?</Text>
                        <Text style={{ textAlign: 'left', color: colors.black }} >2:15 pm</Text>
                    </View>
                </View>
            </View>


            <View style={{ marginTop: 10, alignItems: 'flex-start', }}>
                <View style={[styles.msgContainer, { backgroundColor: colors.Neutral_05 }]}>
                    <Image
                        source={Images.noPhoto}
                        style={{ width: 40, height: 40, borderRadius: 50 }}
                        resizeMode="contain"
                    />
                    <View style={{ marginLeft: 20, maxWidth: '75%', }}>
                        <Text style={{ textAlign: 'left', color: colors.black }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a</Text>
                        <Text style={{ textAlign: 'left', color: colors.black }}>2:15 pm</Text>
                    </View>
                </View>
            </View>



            <View style={{ marginTop: 10, alignItems: 'flex-start', }}>
                <View style={[styles.msgContainer, { backgroundColor: colors.Neutral_05 }]}>
                    <Image
                        source={Images.noPhoto}
                        style={{ width: 40, height: 40, borderRadius: 50 }}
                        resizeMode="contain"
                    />
                    <View style={{ marginLeft: 20, maxWidth: '75%', }}>
                        <Text style={{ textAlign: 'left', color: colors.black }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a</Text>
                        <Text style={{ textAlign: 'left', color: colors.black }}>2:15 pm</Text>
                    </View>
                </View>
            </View>



            <View style={{ marginTop: 10, alignItems: 'flex-end', }}>
                <View style={[styles.msgContainer, { backgroundColor: colors.Primary_04 }]}>
                    <Image
                        source={Images.profilePic}
                        style={{ width: 40, height: 40, borderRadius: 50 }}
                        resizeMode="contain"
                    />
                    <View style={{ marginLeft: 20, maxWidth: '75%', }}>
                        <Text style={{ textAlign: 'left', color: colors.black }}>Still Available??</Text>
                        <Text style={{ textAlign: 'left', color: colors.black }}>2:25 pm</Text>
                    </View>
                </View>
            </View>

            <View style={{ marginTop: 10, alignItems: 'flex-end', }}>
                <View style={[styles.msgContainer, { backgroundColor: colors.Primary_04 }]}>
                    <Image
                        source={Images.profilePic}
                        style={{ width: 40, height: 40, borderRadius: 50 }}
                        resizeMode="contain"
                    />
                    <View style={{ marginLeft: 20, maxWidth: '75%', }}>
                        <Text style={{ textAlign: 'left', color: colors.black }}>No</Text>
                        <Text style={{ textAlign: 'left', color: colors.black }}>2:25 pm</Text>
                    </View>
                </View>
            </View>

        </ScrollView>
    );
};

export default ChatBox;

const createStyles = (colors, theme) => {
    return StyleSheet.create({
        wrapper: {
            flex: 1,
            marginTop: 10,
        },
        msgContainer: {
            borderRadius: 10,
            padding: 10,
            marginHorizontal: 10,
            flexDirection: 'row',
        },
    });
};