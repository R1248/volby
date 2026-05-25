import { useEffect } from 'react';
import * as NavigationBar from 'expo-navigation-bar';
import { Stack } from 'expo-router';
import { StatusBar as ExpoStatusBar, setStatusBarHidden } from 'expo-status-bar';
import { AppState, Platform } from 'react-native';

import { useGameStore } from '@/src/store/useGameStore';
import { colors } from '@/src/theme/colors';

export default function RootLayout() {
  const hydrateGame = useGameStore((state) => state.hydrateGame);

  useEffect(() => {
    void hydrateGame();
  }, [hydrateGame]);

  useEffect(() => {
    const hideSystemBars = () => {
      setStatusBarHidden(true, 'fade');

      if (Platform.OS === 'android') {
        void NavigationBar.setVisibilityAsync('hidden');
      }
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
