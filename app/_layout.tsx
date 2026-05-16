import { useEffect } from 'react';
import * as NavigationBar from 'expo-navigation-bar';
import { Stack } from 'expo-router';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { AppState, Platform, StatusBar as NativeStatusBar } from 'react-native';

import { useGameStore } from '@/src/store/useGameStore';
import { colors } from '@/src/theme/colors';

export default function RootLayout() {
  const hydrateGame = useGameStore((state) => state.hydrateGame);

  useEffect(() => {
    void hydrateGame();
  }, [hydrateGame]);

  useEffect(() => {
    if (Platform.OS !== 'android') {
      return;
    }

    const hideSystemBars = () => {
      NativeStatusBar.setHidden(true, 'fade');
      void NavigationBar.setVisibilityAsync('hidden');
    };

    hideSystemBars();

    const interval = setInterval(hideSystemBars, 2500);
    const subscription = AppState.addEventListener('change', (state) => {
      if (state === 'active') {
        hideSystemBars();
      }
    });

    return () => {
      clearInterval(interval);
      subscription.remove();
    };
  }, []);

  return (
    <>
      <Stack
        screenOptions={{
          animation: 'fade',
          contentStyle: { backgroundColor: colors.background },
          headerShown: false,
        }}
      />
      <ExpoStatusBar hidden />
    </>
  );
}
