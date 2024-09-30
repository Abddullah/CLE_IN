import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// local imports
import Splash from './../screens/Splash/index';
import GetStarted from './../screens/GetStarted/index';
import Signin from './../screens/Auth/signin';
import Signup from './../screens/Auth/signup';
import ForgotPassword from './../screens/Auth/forgotPassword';
import ResetPassword from './../screens/Auth/resetPassword';
import OtpVerify from './../screens/Auth/otp';
import { AppBottomNavigator } from './BottomNavigation';
import AdFullView from '../screens/AdFullView/index';
import CreateBooking from '../screens/Services/index';
import Reviews from '../screens/Reviews/index';
import Chat from '../screens/Chat/index';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen options={{ headerShown: false }} component={Splash} name="Splash" />
        <Stack.Screen options={{ headerShown: false }} component={GetStarted} name="GetStarted" />
        <Stack.Screen options={{ headerShown: false }} component={Signin} name="Signin" />
        <Stack.Screen options={{ headerShown: false }} component={Signup} name="Signup" />
        <Stack.Screen options={{ headerShown: false }} component={OtpVerify} name="OtpVerify" />
        <Stack.Screen options={{ headerShown: false }} component={ForgotPassword} name="ForgotPassword" />
        <Stack.Screen options={{ headerShown: false }} component={ResetPassword} name="ResetPassword" /> */}
        <Stack.Screen options={{ headerShown: false }} name="Tabs" component={AppBottomNavigator} />
        <Stack.Screen options={{ headerShown: false }} name="AdFullView" component={AdFullView} />
        <Stack.Screen options={{ headerShown: false }} name="CreateBooking" component={CreateBooking} />
        <Stack.Screen options={{ headerShown: false }} name="Reviews" component={Reviews} />
        <Stack.Screen options={{ headerShown: false }} name="Chat" component={Chat} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
