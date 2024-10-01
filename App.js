/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View
} from 'react-native';
import Toast from "react-native-toast-message"
import { Provider } from 'react-redux';
import store from "./src/store/store/index"
import { NativeBaseProvider } from 'native-base';
import AppNavigator from "./src/navigation/navigation"
import { I18nextProvider } from 'react-i18next';
import i18n, { fetchTranslations } from './src/assets/language';
import { ThemeProvider, useTheme } from './ThemeContext'; // Adjust the import path

function App() {
  console.disableYellowBox = true;

  const getTranslations = async () => { return fetchTranslations(); };
  useEffect(() => { getTranslations(); }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <NativeBaseProvider>
        <ThemeProvider>
          <Provider store={store}>
            <View style={{ flex: 1, height: '100%', width: '100%', backgroundColor: 'red' }}>
              <AppNavigator />
              <Toast />
            </View>
          </Provider>
        </ThemeProvider>
      </NativeBaseProvider>
    </I18nextProvider>

  );
}

export default App;
