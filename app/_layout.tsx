import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

import "../global.css";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const queryClient = new QueryClient();
  const [loaded, error] = useFonts({
    thinSFDisplay: require("../assets/fonts/SF-Pro-Display-Thin.otf"),
    ultraLightSFDisplay: require("../assets/fonts/SF-Pro-Display-Ultralight.otf"),
    lightSFDisplay: require("../assets/fonts/SF-Pro-Display-Light.otf"),
    regularSFDisplay: require("../assets/fonts/SF-Pro-Display-Regular.otf"),
    mediumSFDisplay: require("../assets/fonts/SF-Pro-Display-Medium.otf"),
    semiBoldSFDisplay: require("../assets/fonts/SF-Pro-Display-Semibold.otf"),
    boldSFDisplay: require("../assets/fonts/SF-Pro-Display-Bold.otf"),
    heavySFDisplay: require("../assets/fonts/SF-Pro-Display-Heavy.otf"),
    blackSFDisplay: require("../assets/fonts/SF-Pro-Display-Black.otf"),
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded || error) return null;

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <QueryClientProvider client={queryClient}>
          <Stack>
            <Stack.Screen
              name="(tabs)"
              options={{
                title: "tabs",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="stepOne"
              options={{
                title: "Prescription Verification",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="stepTwo"
              options={{
                title: "Prescription Verification",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="optimizePrescription"
              options={{
                title: "Prescription Verification",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="prescriptionVerification"
              options={{
                title: "Prescription Verification",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="editDrug"
              options={{ title: "Edit Drug", headerShown: false }}
            />
          </Stack>
          <StatusBar style="dark" />
          <Toast />
        </QueryClientProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default RootLayout;
