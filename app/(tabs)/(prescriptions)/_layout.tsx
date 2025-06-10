import { Stack } from "expo-router";
import React from "react";

const PrescriptionsLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Prescriptions", headerShown: false }}
      />
    </Stack>
  );
};

export default PrescriptionsLayout;
