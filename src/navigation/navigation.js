import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// local imports
import Splash from './../screens/Splash/index';
import GetStarted from './../screens/GetStarted/index';
import { AppBottomNavigator } from './BottomNavigation';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} component={Splash} name="Splash" />
        <Stack.Screen options={{ headerShown: false }} component={GetStarted} name="GetStarted" />
        {/* <Stack.Screen options={{ headerShown: false }} name="Tabs" component={AppBottomNavigator} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
