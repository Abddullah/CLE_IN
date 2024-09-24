
import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image, TouchableOpacity, } from 'react-native';
import Images from '../assets/images/index'
import { colors } from '../utilities/constants';

const ChatBox = ({ }) => {
    return (
        <ScrollView style={styles.wrapper}>

            <View style={{ marginTop: 10, alignItems: 'flex-start', }}>
                <View style={[styles.msgContainer, { backgroundColor: colors.Neutral_04 }]}>
                    <Image
                        source={Images.noPhoto}
                        style={{ width: 40, height: 40, borderRadius: 50 }}
                        resizeMode="contain"
                    />
                    <View style={{ marginLeft: 20, maxWidth: '75%', }}>
                        <Text style={{ textAlign: 'left' }}>You haven't started chat yet. ?</Text>
                        <Text >2:15 pm</Text>
                    </View>
                </View>
            </View>


            <View style={{ marginTop: 10, alignItems: 'flex-start', }}>
                <View style={[styles.msgContainer, { backgroundColor: colors.Neutral_04 }]}>
                    <Image
                        source={Images.noPhoto}
                        style={{ width: 40, height: 40, borderRadius: 50 }}
                        resizeMode="contain"
                    />
                    <View style={{ marginLeft: 20, maxWidth: '75%', }}>
                        <Text style={{ textAlign: 'left' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a</Text>
                        <Text >2:15 pm</Text>
                    </View>
                </View>
            </View>



            <View style={{ marginTop: 10, alignItems: 'flex-start', }}>
                <View style={[styles.msgContainer, { backgroundColor: colors.Neutral_04 }]}>
                    <Image
                        source={Images.noPhoto}
                        style={{ width: 40, height: 40, borderRadius: 50 }}
                        resizeMode="contain"
                    />
                    <View style={{ marginLeft: 20, maxWidth: '75%', }}>
                        <Text style={{ textAlign: 'left' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a</Text>
                        <Text >2:15 pm</Text>
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
                        <Text style={{ textAlign: 'left' }}>Still Available??</Text>
                        <Text >2:25 pm</Text>
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
                        <Text style={{ textAlign: 'left' }}>No</Text>
                        <Text >2:25 pm</Text>
                    </View>
                </View>
            </View>

        </ScrollView>
    );
};

export default ChatBox;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        marginTop: 10,
    },
    msgContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 10,
        flexDirection: 'row',
    },
});


