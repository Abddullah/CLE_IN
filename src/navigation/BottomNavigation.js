
import React from 'react';
import { Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { LightThemeColors, DarkThemeColors } from '../utilities/constants';
import { useTheme } from '../../ThemeContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { t } from 'i18next';
// icons
import Feather from 'react-native-vector-icons/Feather';
import {
    HomeActive, HomeInactive, HomeInactiveWhite,
    BookingActive, BookingInactive, BookingInactiveWhite,
    MapActive, MapInactive, MapInactiveWhite,
    ProfileActive, ProfileInactive, ProfileInactiveWhite,
    AddActive, AnalyticsActive, AnalyticsInActive, AnalyticsInActiveWhite
} from '../assets/icons';

// bottom navigation screens
import Home from '../screens/Home/index';
// booking
import Bookings from '../screens/Bookings/index';
// create service
import CreateService from '../screens/ServiceCreate/index';
// map
import Map from '../screens/Map/index';
// analytics
import Analytics from '../screens/Analytics/index';
// notification
import Notification from './../screens/Notification/index';
// profile
import Profile from './../screens/Profile/index';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeRoutes({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
            <Stack.Screen options={{ headerShown: false }} name="ServiceCreate" component={CreateService} />

        </Stack.Navigator>
    )
}

function BookingRoutes({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Booking" component={Bookings} />
        </Stack.Navigator>
    )
}


function MapRoutes({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Map" component={Map} />
        </Stack.Navigator>
    )
}

function AnalyticsRoutes({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Analytics" component={Analytics} />
            <Stack.Screen options={{ headerShown: false }} name="Notification" component={Notification} />
        </Stack.Navigator>
    )
}

function NotificationRoutes({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Notification" component={Notification} />
        </Stack.Navigator>
    )
}

function ProfileRoutes({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Profile" component={Profile} />
        </Stack.Navigator>
    )
}

export function AppBottomNavigator() {
    const { theme } = useTheme();
    const colors = theme === 'dark' ? DarkThemeColors : LightThemeColors;

    let user = useSelector((state) => state.reducer.user);
    console.log(user.role === 'provider', 'user');

    return (
        <Tab.Navigator
            initialRouteName={"Home"}
            tabBar={(props) => {
                return (
                    <BottomTabBar {...props} />);
            }}
            screenOptions={{
                tabBarStyle: { backgroundColor: theme === 'dark' ? colors.Primary_01 : colors.white, },
                tabBarHideOnKeyboard: true,
            }}
        >
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarLabel: ({ focused }) => { return (<Text style={{ color: focused ? colors.BothPrimary_01 : colors.Neutral_01, fontSize: 12, top: -5 }}>{user.role === 'provider' ? t('myads') : t('home')}</Text>) },
                    tabBarIcon: ({ focused }) => {
                        return (focused ? <HomeActive /> : theme === 'dark' ? <HomeInactiveWhite /> : <HomeInactive />
                        )
                    },
                }}
                name="Home"
                component={HomeRoutes}
            />
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarLabel: ({ focused }) => { return (<Text style={{ color: focused ? colors.BothPrimary_01 : colors.Neutral_01, fontSize: 12, top: -5 }}>{t('booking')}</Text>) },
                    tabBarIcon: ({ focused }) => { return (focused ? <BookingActive /> : theme === 'dark' ? <BookingInactiveWhite /> : <BookingInactive />) },
                }}
                name="Booking"
                component={BookingRoutes}
            />
            {/* {
                user.role === 'provider' &&
                <Tab.Screen
                    options={{
                        headerShown: false,
                        tabBarLabel: '', // explicitly set label to an empty string
                        tabBarIcon: ({ focused }) => {
                            return (<AddActive style={{ top: 5 }} />);
                        },
                    }}
                    name="ServiceCreate"
                    component={CreateServiceRoutes}
                />
            } */}

            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarLabel: ({ focused }) => { return (<Text style={{ color: focused ? colors.BothPrimary_01 : colors.Neutral_01, fontSize: 12, top: -5 }}>{t('map')}</Text>) },
                    tabBarIcon: ({ focused }) => { return (focused ? <MapActive /> : theme === 'dark' ? <MapInactiveWhite /> : <MapInactive />) },
                }}
                name="Map"
                component={MapRoutes}
            />


            {
                user.role === 'provider' &&
                <Tab.Screen
                    options={{
                        headerShown: false,
                        tabBarLabel: ({ focused }) => { return (<Text style={{ color: focused ? colors.BothPrimary_01 : colors.Neutral_01, fontSize: 12, top: -5 }}>{t('analytics')}</Text>) },
                        tabBarIcon: ({ focused }) => { return (focused ? <AnalyticsActive /> : theme === 'dark' ? <AnalyticsInActiveWhite /> : <AnalyticsInActive />) },
                    }}
                    name="Analytics"
                    component={AnalyticsRoutes}
                />
            }
            {
                user.role === 'user' &&
                <Tab.Screen
                    options={{
                        headerShown: false,
                        tabBarLabel: ({ focused }) => { return (<Text style={{ color: focused ? colors.BothPrimary_01 : colors.Neutral_01, fontSize: 12, top: -5 }}>{t('notification')}</Text>) },
                        tabBarIcon: ({ focused }) => { return (<Feather name="bell" style={{ fontSize: 20, color: focused ? colors.BothPrimary_01 : colors.Neutral_01 }} />) },
                    }}
                    name="Notification"
                    component={NotificationRoutes}
                />
            }


            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarLabel: ({ focused }) => { return (<Text style={{ color: focused ? colors.BothPrimary_01 : colors.Neutral_01, fontSize: 12, top: -5 }}>{t('profile')}</Text>) },
                    tabBarIcon: ({ focused }) => { return (focused ? <ProfileActive /> : theme === 'dark' ? <ProfileInactiveWhite /> : <ProfileInactive />) },
                }}
                name="Profile"
                component={ProfileRoutes}
            />
        </Tab.Navigator >
    );
}


