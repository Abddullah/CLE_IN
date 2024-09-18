
import React from 'react';
import { Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
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
import Splash from './../screens/GetStarted/index';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeRoutes({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="HomeScreen" component={Splash} />
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
                    tabBarLabel: ({ focused }) => { return (<Text style={{ color: focused ? '#00BFFF' : '#818888', fontSize: 12, top: -5 }}>Home</Text>) },
                    tabBarIcon: ({ focused }) => { return (focused ? <HomeActive /> : <HomeInactive />) },
                }}
                name="Home"
                component={HomeRoutes}
            />
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarLabel: ({ focused }) => { return (<Text style={{ color: focused ? '#00BFFF' : '#818888', fontSize: 12, top: -5 }}>Booking</Text>) },
                    tabBarIcon: ({ focused }) => { return (focused ? <BookingActive /> : <BookingInactive />) },
                }}
                name="Booking"
                component={HomeRoutes}
            />
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarLabel: ({ focused }) => { return (<Text style={{ color: focused ? '#00BFFF' : '#818888', fontSize: 12, top: -5 }}>Map</Text>) },
                    tabBarIcon: ({ focused }) => { return (focused ? <MapActive /> : <MapInactive />) },
                }}
                name="Map"
                component={HomeRoutes}
            />
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarLabel: ({ focused }) => { return (<Text style={{ color: focused ? '#00BFFF' : '#818888', fontSize: 12, top: -5 }}>Notification</Text>) },
                    tabBarIcon: ({ focused }) => { return (<Feather name="bell" style={{ fontSize: 20, color: focused ? '#00BFFF' : '#818888' }} />) },
                }}
                name="Notification"
                component={HomeRoutes}
            />
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarLabel: ({ focused }) => { return (<Text style={{ color: focused ? '#00BFFF' : '#818888', fontSize: 12, top: -5 }}>Profile</Text>) },
                    tabBarIcon: ({ focused }) => { return (focused ? <ProfileActive /> : <ProfileInactive />) },
                }}
                name="Profile"
                component={HomeRoutes}
            />

        </Tab.Navigator>
    );
}
