
import React from 'react';
import { Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { colors } from '../utilities/constants';
import { t } from 'i18next';
// icons
import Feather from 'react-native-vector-icons/Feather';
// icons
import {
    HomeActive, HomeInactive,
    BookingActive, BookingInactive,
    MapActive,
    MapInactive,
    ProfileActive,
    ProfileInactive,
} from '../assets/icons';
// bottom navigation screens
import Map from '../screens/Map/index';
import Notification from './../screens/Notification/index';
import Profile from './../screens/Profile/index';
import EditProfile from './../screens/Profile/editProfile';
import Favorite from './../screens/Profile/favorite';
import CreditCard from './../screens/CreditCard/index';
import AddNewCard from './../screens/CreditCard/addNewCard';
import ReferralDiscounts from './../screens/ReferralDiscounts/index';
import Preferences from './../screens/Preferences/index';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeRoutes({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Map" component={Map} />
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
            <Stack.Screen options={{ headerShown: false }} name="EditProfile" component={EditProfile} />
            <Stack.Screen options={{ headerShown: false }} name="Favorite" component={Favorite} />
            <Stack.Screen options={{ headerShown: false }} name="CreditCard" component={CreditCard} />
            <Stack.Screen options={{ headerShown: false }} name="AddNewCard" component={AddNewCard} />
            <Stack.Screen options={{ headerShown: false }} name="ReferralDiscounts" component={ReferralDiscounts} />
            <Stack.Screen options={{ headerShown: false }} name="Preferences" component={Preferences} />
        </Stack.Navigator>
    )
}

export function AppBottomNavigator() {
    return (
        <Tab.Navigator
            initialRouteName={"Home"}
            tabBar={(props) => {
                return (<BottomTabBar {...props} />);
            }}
        >
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarLabel: ({ focused }) => { return (<Text style={{ color: focused ? colors.Primary_01 : colors.Neutral_01, fontSize: 12, top: -5 }}>{t('home')}</Text>) },
                    tabBarIcon: ({ focused }) => { return (focused ? <HomeActive /> : <HomeInactive />) },
                }}
                name="Home"
                component={HomeRoutes}
            />
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarLabel: ({ focused }) => { return (<Text style={{ color: focused ? colors.Primary_01 : colors.Neutral_01, fontSize: 12, top: -5 }}>{t('booking')}</Text>) },
                    tabBarIcon: ({ focused }) => { return (focused ? <BookingActive /> : <BookingInactive />) },
                }}
                name="Booking"
                component={HomeRoutes}
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
            />

        </Tab.Navigator>
    );
}
