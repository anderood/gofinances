import React from 'react';
import AppLoading from 'expo-app-loading';

import { ThemeProvider } from 'styled-components';

import theme from './src/Global/styles/theme';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold

} from '@expo-google-fonts/poppins'

import { Dashboard } from './src/pages/Dashboard';

export default function App() {

  const [fonstLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if(!fonstLoaded){
    return <AppLoading/>
  }

  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}


