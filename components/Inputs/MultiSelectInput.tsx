import React, { useState } from "react";
import {
  FlatList,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CancelRoundIcon from "../Icons/CancelRoundIcon";
import ChevronDownIcon from "../Icons/ChevronDownIcon";
import ChevronUpIcon from "../Icons/ChevronUpIcon";

const data = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
  { label: "Item 4", value: "4" },
  { label: "Item 5", value: "5" },
  { label: "Item 6", value: "6" },
  { label: "Item 7", value: "7" },
  { label: "Item 8", value: "8" },
];

const CustomMultiSelectInput = ({
  disabled,
  options = [],
  onSelected,
  name = "Select input",
  error,
}: any) => {
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleItem = (item: any) => {
    const exists = selectedItems.some((i) => i.id === item.id);
    const updated = exists
      ? selectedItems.filter((i) => i.id !== item.id)
      : [...selectedItems, item];

    setSelectedItems(updated);
    onSelected?.(updated);
  };
  const removeItem = (item: any) => {
    const updated = selectedItems.filter((i) => i.id !== item.id);
    setSelectedItems(updated);
    onSelected?.(updated);
  };
  return (
    <View className="mb-6 relative">
      <View className="mb-1">
        <Text
          className={`text-sm font-mediumSFDisplay ${
            disabled ? "text-[#98A2B3]" : "text-black"
          }`}
        >
          {name}
        </Text>
      </View>

      <TouchableOpacity
        disabled={disabled}
        className="border border-[#D0D5DD] rounded-md bg-[#F6F6F6] p-4"
        onPress={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <View className="flex-row justify-between items-center">
          {selectedItems.length > 0 ? (
            <Text className="text-[#333333] font-regularSFDisplay text-sm">
              {selectedItems.map((i) => {
                return (
                  <TouchableOpacity key={i.name} onPress={() => removeItem(i)}>
                    <View className="gap-1 flex-row mr-2 items-center rounded-md px-[10px] py-[6px] mb-1 bg-[#E9E9E9]">
                      <Text className="text-[#333333] font-regularSFDisplay text-xs">
                        {i.label || i.name}
                      </Text>
                      <CancelRoundIcon />
                    </View>
                  </TouchableOpacity>
                );
              })}
            </Text>
          ) : (
            <Text className="text-[#98A2B3] font-regularSFDisplay text-sm">
              Select
            </Text>
          )}
          <View>
            {isDropdownOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </View>
        </View>
      </TouchableOpacity>

      {isDropdownOpen && (
        <View className=" top-[8px] left-0 right-0 z-10 bg-white border border-[#D0D5DD] rounded-md shadow-md max-h-60">
          <FlatList
            data={options}
            keyExtractor={(item) => item.id}
            nestedScrollEnabled
            renderItem={({ item }) => {
              const isSelected = selectedItems.some((i) => i.id === item.id);
              return (
                <Pressable
                  onPress={() => toggleItem(item)}
                  className={`py-3 px-4 ${isSelected ? "bg-[#F0F0F0]" : ""}`}
                >
                  <Text className="text-sm text-gray-900">
                    {item.label || item.name} {isSelected ? "✓" : ""}
                  </Text>
                </Pressable>
              );
            }}
          />
          <TouchableOpacity
            className="p-3  bg-white"
            onPress={() => setIsDropdownOpen(false)}
          >
            <Text className="text-sm text-gray-600 text-right font-medium">
              Done
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {error && <Text className="mt-2 text-red-500 text-xs">{error}</Text>}
    </View>
  );
};

export default CustomMultiSelectInput;
