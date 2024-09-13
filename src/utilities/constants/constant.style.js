import { Dimensions, StyleSheet, Platform, StatusBar } from 'react-native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { platform } from './index';
import screenResolution from './screenResolution';
import colors from './colors';

export const windowWidth = Dimensions.get('window').width;
export const flex1BottomTab = Dimensions.get('window').height - (platform == 'ios' ? RFPercentage(10) : RFPercentage(8) - (StatusBar && StatusBar.currentHeight || 0));
export const windowHeight = Platform.OS === 'android' ? Dimensions.get('window').height - (StatusBar && StatusBar.currentHeight || 0) : Dimensions.get('window').height;
export const heightFlex1 = windowHeight / 10;

export const centralPosition = {
    flexStart: "flex-start",
    center: 'center',
    spacebetween: "space-between",
    spaceEvenly: "space-evenly",
    flexEnd: "flex-end",
    left: "left",
    right: "right",
};

export const centralStyle = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
    },
    selfStart: {
        alignSelf: 'flex-start'
    },
    selfCenter: {
        alignSelf: "center"
    },
    selfEnd: {
        alignSelf: 'flex-end'
    },
    XAndYStart: {
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },
    XAndYCenter: {
        justifyContent: "center",
        alignItems: 'center'
    },
    justifyContentStart: {
        justifyContent: "flex-start"
    },
    justifyContentEvenly: {
        justifyContent: "space-evenly"
    },
    justifyContentCenter: {
        justifyContent: "center"
    },
    justifyContentEnd: {
        justifyContent: "flex-end"
    },
    justifyContentBetween: {
        justifyContent: 'space-between'
    },
    justifyContentAround: {
        justifyContent: 'space-around'
    },
    alignitemStart: {
        alignItems: "flex-start"
    },
    alignitemCenter: {
        alignItems: "center"
    },
    alignitemEnd: {
        alignItems: "flex-end"
    },
    row: {
        flexDirection: "row"
    },
    column: {
        flexDirection: 'column'
    },
    flex1: { flex: 1 },
    circle: (size) => ({
        height: size,
        justifyContent: 'center',
        alignItems: 'center',
        width: size,
        borderRadius: size / 2
    }),
    pb10: {
        paddingBottom: RFValue(10, screenResolution.screenHeight)
    },
    pb15: {
        paddingBottom: RFValue(15, screenResolution.screenHeight)
    },
    pb5: {
        paddingBottom: RFValue(5, screenResolution.screenHeight)
    },
    my01: {
        marginVertical: RFValue(.1, screenResolution.screenHeight)
    },
    my02: {
        marginVertical: RFValue(.2, screenResolution.screenHeight)
    },
    my05: {
        marginVertical: RFValue(.5, screenResolution.screenHeight)
    },
    mr05: {
        marginRight: RFValue(0.5, screenResolution.screenHeight)
    },
    mr2: {
        marginRight: RFValue(2, screenResolution.screenHeight)
    },
    mr3: {
        marginRight: RFValue(3, screenResolution.screenHeight)
    },
    mr1: {
        marginRight: RFValue(1, screenResolution.screenHeight)
    },
    my1: {
        marginVertical: RFValue(1, screenResolution.screenHeight)
    },
    my3: {
        marginVertical: RFValue(3, screenResolution.screenHeight)
    },
    my2: {
        marginVertical: RFValue(2, screenResolution.screenHeight)
    },
    my4: {
        marginVertical: RFValue(4, screenResolution.screenHeight)
    },
    my10: {
        marginVertical: RFValue(10, screenResolution.screenHeight)
    },
    mb3: {
        marginBottom: RFValue(3, screenResolution.screenHeight)
    },
    mb1: {
        marginBottom: RFValue(1, screenResolution.screenHeight)
    },
    m1: {
        margin: RFValue(1, screenResolution.screenHeight)
    },
    m2: {
        margin: RFValue(2, screenResolution.screenHeight)
    },
    mb2: {
        marginBottom: RFValue(2, screenResolution.screenHeight)
    },
    mt3: {
        marginTop: RFValue(3, screenResolution.screenHeight)
    },
    mt4: {
        marginTop: RFValue(4, screenResolution.screenHeight)
    },
    mt5: {
        marginTop: RFValue(5, screenResolution.screenHeight)
    },
    mt6: {
        marginTop: RFValue(6, screenResolution.screenHeight)
    },
    mt7: {
        marginTop: RFValue(7, screenResolution.screenHeight)
    },
    mt8: {
        marginTop: RFValue(8, screenResolution.screenHeight)
    },
    mt10: {
        marginTop: RFValue(10, screenResolution.screenHeight)
    },
    mt2: {
        marginTop: RFValue(2, screenResolution.screenHeight)
    },
    mt1: {
        marginTop: RFValue(1, screenResolution.screenHeight)
    },
    ml1: {
        marginLeft: RFValue(1, screenResolution.screenHeight)
    },
    ml2: {
        marginLeft: RFValue(2, screenResolution.screenHeight)
    },
    mx02: {
        marginHorizontal: RFValue(.2, screenResolution.screenHeight)
    },
    mx0: {
        marginHorizontal: RFValue(0, screenResolution.screenHeight)
    },
    mx05: {
        marginHorizontal: RFValue(.5, screenResolution.screenHeight)
    },
    mx1: {
        marginHorizontal: RFValue(1, screenResolution.screenHeight)
    },
    mx2: {
        marginHorizontal: RFValue(2, screenResolution.screenHeight)
    },
    mx3: {
        marginHorizontal: RFValue(3, screenResolution.screenHeight)
    },
    mx4: {
        marginHorizontal: RFValue(4, screenResolution.screenHeight)
    },
    px05: {
        paddingHorizontal: RFValue(.5, screenResolution.screenHeight)
    },
    px1: {
        paddingHorizontal: RFValue(1, screenResolution.screenHeight)
    },
    py2: {
        paddingVertical: RFValue(2, screenResolution.screenHeight)
    },
    py1: {
        paddingVertical: RFValue(1, screenResolution.screenHeight)
    },
    pb3: {
        paddingBottom: RFValue(3, screenResolution.screenHeight)
    },
    py05: {
        paddingVertical: RFValue(.5, screenResolution.screenHeight)
    },
    px2: {
        paddingHorizontal: RFValue(2, screenResolution.screenHeight)
    },
    px3: {
        paddingHorizontal: RFValue(3, screenResolution.screenHeight)
    },
    p2: {
        padding: RFValue(2, screenResolution.screenHeight)
    },
    p1: {
        padding: RFValue(1, screenResolution.screenHeight)
    },
    p1p5: {
        padding: RFValue(1.5, screenResolution.screenHeight)
    },
    width100: {
        width: "100%"
    },
    width80: {
        width: "80%"
    },
    width70: {
        width: "70%"
    },
    width90: {
        width: "90%"
    },
    width60: {
        width: "60%"
    },
    width50: {
        width: "50%"
    },
    width40: {
        width: "40%"
    },
    width45: {
        width: "45%"
    },
    width30: {
        width: "30%"
    },
    height100: {
        height: '100%'
    },
    wrap: {
        flexWrap: 'wrap'
    },
});

export const Typography = StyleSheet.create({
    text_heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.black
    },
    text_paragraph: {
        fontSize: 14,
        color: colors.Neutral_01,
        textAlign: 'center'
    },
})

export const Layout = StyleSheet.create({
    buttonContainer: {
        height: 44,
        width: 44,
        justifyContent: 'center',
        borderRadius: 22,
        alignItems: 'center',
    },
    maxWidth: {
        maxWidth: 480
    },
    marginHorizontal: {
        marginHorizontal: 16
    },
    marginLeft: {
        marginLeft: 16
    },
    marginRight: {
        marginRight: 16
    },

})