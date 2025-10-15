// app/_layout.tsx
import 'react-native-gesture-handler';
import 'react-native-reanimated';

import { Stack } from 'expo-router';
import * as React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { MD3DarkTheme, MD3LightTheme, Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from '../src/providers/AuthProvider';

export default function RootLayout() {
  const isDark = useColorScheme() === 'dark';

  const brand = { primary: '#5E60CE', secondary: '#56CFE1' };
  const theme = isDark
    ? { ...MD3DarkTheme, colors: { ...MD3DarkTheme.colors, ...brand } }
    : { ...MD3LightTheme, colors: { ...MD3LightTheme.colors, ...brand } };

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      <PaperProvider theme={theme}>
        <AuthProvider>
          <Stack screenOptions={{ headerTitle: 'Bible Companion' }} />
        </AuthProvider>
      </PaperProvider>
    </SafeAreaProvider>
  );
}