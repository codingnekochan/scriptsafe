import HomeIcon from '@/components/Icons/HomeIcon';
import PrescriptionIcon from '@/components/Icons/PrescriptionIcon';
import ProfileIcon from '@/components/Icons/ProfileIcon';
import SearchIcon from '@/components/Icons/SearchIcon';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import { Tabs } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import '../global.css';

SplashScreen.preventAutoHideAsync()

const RootLayout = () => {

  const queryClient = new QueryClient();
  const [loaded, error] = useFonts({
    thinSFDisplay: require('../assets/fonts/SF-Pro-Display-Thin.otf'),
    ultraLightSFDisplay: require('../assets/fonts/SF-Pro-Display-Ultralight.otf'),
    lightSFDisplay: require('../assets/fonts/SF-Pro-Display-Light.otf'),
    regularSFDisplay: require('../assets/fonts/SF-Pro-Display-Regular.otf'),
    mediumSFDisplay: require('../assets/fonts/SF-Pro-Display-Medium.otf'),
    semiBoldSFDisplay: require('../assets/fonts/SF-Pro-Display-Semibold.otf'),
    boldSFDisplay: require('../assets/fonts/SF-Pro-Display-Bold.otf'),
    heavySFDisplay: require('../assets/fonts/SF-Pro-Display-Heavy.otf'),
    blackSFDisplay: require('../assets/fonts/SF-Pro-Display-Black.otf'),
  })
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

  if (!loaded || error) return null

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <QueryClientProvider client={queryClient}>
          <Tabs screenOptions={{
            tabBarStyle: {
              backgroundColor: 'white',
              borderWidth: 0,
              paddingLeft: 12,
              paddingRight: 12,
            },
            tabBarActiveTintColor: '#317BFF',
            tabBarLabelPosition: 'below-icon',
            tabBarInactiveTintColor: '#828282',
            tabBarLabelStyle: { fontFamily: 'regularSFDisplay', fontSize: 12 },
          }}>
            <Tabs.Screen
              name='(home)'
              options={{
                title: 'Home',
                headerShown: false,
                tabBarIcon: ({ color = '#828282', size = 25 }) => <HomeIcon w={size} color={color} />,
                href : ("/(home)")
              }} />
            <Tabs.Screen
              name='(prescriptions)'
              options={
                {
                  title: 'Prescriptions',
                  headerShown: false,
                  tabBarIcon: ({ color = '#828282', size = 24 }) => <PrescriptionIcon w={size} color={color} />,
                  href : ('/(prescriptions)')

                }
              } />
            <Tabs.Screen
              name='(search)'
              options={
                {
                  title: 'Search',
                  headerShown: false,
                  tabBarIcon: ({ color = '#828282', size = 23 }) => <SearchIcon w={size} color={color} />,
                  href : ('/(search)'),
                }}
            />
            <Tabs.Screen
              name='(profile)'
              options={{
                title: 'My profile',
                headerShown: false,
                tabBarIcon: ({ color = '#828282', size = 20 }) => <ProfileIcon w={size} color={color} />,
                href :('/(profile)')
              }} />
          </Tabs>
          <StatusBar style='dark' />
        </QueryClientProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  )
}

export default RootLayout