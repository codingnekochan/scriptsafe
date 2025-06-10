import Container from "@/components/common/Container";
import { img_missing_screen } from "@/constants/images";
import { router } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const MissingContentScreen = () => {
  return (
    <Container>
      <View className="flex-1 justify-center items-center">
        <Image source={img_missing_screen} className="w-[300px] h-[450px]" />
        <View className="gap-2 mb-2">
          <Text className="font-boldSFDisplay text-base text-center">
            Oops! This page is missing.
          </Text>
          <Text className="text-center font-regularSFDisplay text-sm">
            Looks like you found a page that doesn&apos;t exist yet. It&apos;s
            probably taking a nap 💤.
          </Text>
        </View>
        <TouchableOpacity onPress={() => router.replace("/(tabs)/(home)")}>
          <View className="py-4 rounded-xl bg-[#317BFF] px-6">
            <Text className="text-white font-boldSFDisplay text-sm">
              Go back to home
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default MissingContentScreen;
