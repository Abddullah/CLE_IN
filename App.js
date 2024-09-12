/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Toast from "react-native-toast-message"
import { Provider } from 'react-redux';
import store from "./src/store/store/index"
import { NativeBaseProvider } from 'native-base';
import AppNavigator from "./src/navigation/navigation"

function App() {
  console.disableYellowBox = true;

  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1 }}>
          <AppNavigator />
          <Toast />
        </SafeAreaView>
      </Provider>
    </NativeBaseProvider>
  );
}

export default App;
