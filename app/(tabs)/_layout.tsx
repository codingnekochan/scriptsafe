import HomeIcon from "@/components/Icons/HomeIcon";
import PrescriptionIcon from "@/components/Icons/PrescriptionIcon";
import ProfileIcon from "@/components/Icons/ProfileIcon";
import SearchIcon from "@/components/Icons/SearchIcon";
import { Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "white",
          borderWidth: 0,
          paddingLeft: 12,
          paddingRight: 12,
        },
        tabBarActiveTintColor: "#317BFF",
        tabBarLabelPosition: "below-icon",
        tabBarInactiveTintColor: "#828282",
        tabBarLabelStyle: { fontFamily: "regularSFDisplay", fontSize: 12 },
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color = "#828282", size = 25 }) => (
            <HomeIcon w={size} color={color} />
          ),
          //   href: ("/(home)")
        }}
      />
      <Tabs.Screen
        name="(prescriptions)"
        options={{
          title: "Prescriptions",
          headerShown: false,
          tabBarIcon: ({ color = "#828282", size = 24 }) => (
            <PrescriptionIcon w={size} color={color} />
          ),
          //   href: ('/(prescriptions)')
        }}
      />
      <Tabs.Screen
        name="(search)"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ color = "#828282", size = 23 }) => (
            <SearchIcon w={size} color={color} />
          ),
          //   href: ('/(search)'),
        }}
      />
      <Tabs.Screen
        name="(profile)"
        options={{
          title: "My profile",
          headerShown: false,
          tabBarIcon: ({ color = "#828282", size = 20 }) => (
            <ProfileIcon w={size} color={color} />
          ),
          //   href: ('/(profile)')
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
