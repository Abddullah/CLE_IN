
import React from 'react';
import { Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
// icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// bottom navigation screens
import Splash from './../screens/Splash/index';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeRoutes({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="HomeScreen" component={Splash} />
        </Stack.Navigator>
    )
}

function AdsRoutes({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="MyAdsScreen" component={Splash} />
        </Stack.Navigator>
    )
}

function SellNowRoutes({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="SellNowScreen" component={Splash} />
        </Stack.Navigator>
    )
}

function ChatRoutes({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="SavedAds" component={Splash} />
        </Stack.Navigator>
    )
}

function MoreRoutes({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="MoreScreen" component={Splash} />
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
                    tabBarLabel: ({ focused }) => { return (<Text style={{ color: focused ? 'red' : '#344054' }}>Home</Text>) },
                    tabBarIcon: ({ focused }) => { return (<AntDesign name="home" style={{ fontSize: 20, color: focused ? 'red' : '#344054' }} />) },
                }}
                name="Home"
                component={HomeRoutes}
            />
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarLabel: ({ focused }) => { return (<Text style={{ color: focused ? 'red' : '#344054' }}>Booking</Text>) },
                    tabBarIcon: ({ focused }) => { return (<MaterialCommunityIcons name="book-open-outline" style={{ fontSize: 20, color: focused ? 'red' : '#344054' }} />) },
                }}
                name="Booking"
                component={AdsRoutes}
            />

            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarLabel: ({ focused }) => { return (<Text style={{ color: focused ? 'red' : '#344054' }}>Favorite</Text>) },
                    tabBarIcon: ({ focused }) => { return (<Ionicons name="add-circle" style={{ fontSize: 20, color: focused ? 'red' : '#344054' }} />) },
                }}
                name="Favorite"
                component={SellNowRoutes}
            />

            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarLabel: ({ focused }) => { return (<Text style={{ color: focused ? 'red' : '#344054' }}>Notification</Text>) },
                    tabBarIcon: ({ focused }) => { return (<Ionicons name="bookmark-sharp" style={{ fontSize: 20, color: focused ? 'red' : '#344054' }} />) },
                }}
                name="Notification"
                component={ChatRoutes}
            />

            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarLabel: ({ focused }) => { return (<Text style={{ color: focused ? 'red' : '#344054' }}>Profile</Text>) },
                    tabBarIcon: ({ focused }) => { return (<AntDesign name="profile" style={{ fontSize: 18, color: focused ? 'red' : '#344054' }} />) },
                }}
                name="Profile"
                component={MoreRoutes}
            />

        </Tab.Navigator>
    );
}
