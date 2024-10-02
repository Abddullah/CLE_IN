
import React from 'react';
import { Text } from 'react-native';
import { LightThemeColors, DarkThemeColors } from '../utilities/constants';
import { useTheme } from '../../ThemeContext';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
// import { colors } from '../utilities/constants';
import { t } from 'i18next';
// icons
import Feather from 'react-native-vector-icons/Feather';
import {
    HomeActive, HomeInactive,
    BookingActive, BookingInactive,
    MapActive, MapInactive,
    ProfileActive, ProfileInactive,
} from '../assets/icons';

// bottom navigation screens
import Home from '../screens/Home/index';
// booking
// import Bookings from '../screens/Bookings/index';
// map
// import Map from '../screens/Map/index';
// notification
// import Notification from './../screens/Notification/index';
// profile
// import Profile from './../screens/Profile/index';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeRoutes({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
        </Stack.Navigator>
    )
}

// function BookingRoutes({ navigation }) {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen options={{ headerShown: false }} name="Booking" component={Bookings} />
//         </Stack.Navigator>
//     )
// }

// function MapRoutes({ navigation }) {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen options={{ headerShown: false }} name="Map" component={Map} />
//         </Stack.Navigator>
//     )
// }

// function NotificationRoutes({ navigation }) {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen options={{ headerShown: false }} name="Notification" component={Notification} />
//         </Stack.Navigator>
//     )
// }

// function ProfileRoutes({ navigation }) {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen options={{ headerShown: false }} name="Profile" component={Profile} />
//         </Stack.Navigator>
//     )
// }

export function AppBottomNavigator() {
    const { theme } = useTheme();
    const colors = theme === 'dark' ? DarkThemeColors : LightThemeColors;

    return (
        <Tab.Navigator
            initialRouteName={"Home"}
            tabBar={(props) => {
                return (
                    <BottomTabBar {...props} />);
            }}
            screenOptions={{
                tabBarStyle: { backgroundColor: theme === 'dark' ? colors.Primary_01 : colors.white }
            }}
        >
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarLabel: ({ focused }) => { return (<Text style={{ color: focused ? colors.BothPrimary_01 : colors.Neutral_01, fontSize: 12, top: -5 }}>{t('home')}</Text>) },
                    tabBarIcon: ({ focused }) => { return (focused ? <HomeActive /> : <HomeInactive />) },
                }}
                name="Home"
                component={HomeRoutes}
            />
            {/* <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarLabel: ({ focused }) => { return (<Text style={{ color: focused ? colors.Primary_01 : colors.Neutral_01, fontSize: 12, top: -5 }}>{t('booking')}</Text>) },
                    tabBarIcon: ({ focused }) => { return (focused ? <BookingActive /> : <BookingInactive />) },
                }}
                name="Booking"
                component={BookingRoutes}
            />
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarLabel: ({ focused }) => { return (<Text style={{ color: focused ? colors.Primary_01 : colors.Neutral_01, fontSize: 12, top: -5 }}>{t('map')}</Text>) },
                    tabBarIcon: ({ focused }) => { return (focused ? <MapActive /> : <MapInactive />) },
                }}
                name="Map"
                component={MapRoutes}
            />
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarLabel: ({ focused }) => { return (<Text style={{ color: focused ? colors.Primary_01 : colors.Neutral_01, fontSize: 12, top: -5 }}>{t('notification')}</Text>) },
                    tabBarIcon: ({ focused }) => { return (<Feather name="bell" style={{ fontSize: 20, color: focused ? colors.Primary_01 : colors.Neutral_01 }} />) },
                }}
                name="Notification"
                component={NotificationRoutes}
            />
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarLabel: ({ focused }) => { return (<Text style={{ color: focused ? colors.Primary_01 : colors.Neutral_01, fontSize: 12, top: -5 }}>{t('profile')}</Text>) },
                    tabBarIcon: ({ focused }) => { return (focused ? <ProfileActive /> : <ProfileInactive />) },
                }}
                name="Profile"
                component={ProfileRoutes}
            /> */}
        </Tab.Navigator >
    );
}
