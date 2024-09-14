import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// local imports
import Splash from './../screens/Splash/index';
import GetStarted from './../screens/GetStarted/index';
import Signin from './../screens/Auth/signin';
import Signup from './../screens/Auth/signup';
import Otp from './../screens/Auth/otp';
import { AppBottomNavigator } from './BottomNavigation';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen options={{ headerShown: false }} component={Splash} name="Splash" />
        <Stack.Screen options={{ headerShown: false }} component={GetStarted} name="GetStarted" />
        <Stack.Screen options={{ headerShown: false }} component={Signin} name="Signin" />
        <Stack.Screen options={{ headerShown: false }} component={Signup} name="Signup" /> */}
        <Stack.Screen options={{ headerShown: false }} component={Otp} name="Otp" />
        {/* <Stack.Screen options={{ headerShown: false }} name="Tabs" component={AppBottomNavigator} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
