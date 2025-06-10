import React from "react";
import { Text, View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import ChevronDownIcon from "../Icons/ChevronDownIcon";
import ChevronUpIcon from "../Icons/ChevronUpIcon";

const CustomSelectInput = ({
	disabled,
	error,
	options,
	onSelect,
	name = "Select input",
	placeholder,
	value,
}: any) => {
	return (
		<View className="mb-6">
			<View className="mb-1">
				<Text
					className={`text-sm font-mediumSFDisplay ${
						disabled ? "text-[#98A2B3] " : "black"
					}`}
				>
					{name}
				</Text>
			</View>
			<View className="border border-[#D0D5DD] rounded-md bg-[#F6F6F6] justify-center">
				<SelectDropdown
					disabled={disabled}
					defaultValue={value || null}
					data={options}
					onSelect={(selectedItem) => onSelect(selectedItem)}
					buttonStyle={{
						width: "100%",
					}}
					renderButton={(selectedItem, isOpened) => {
						return (
							<View className="flex-row items-center justify-between p-4">
								{selectedItem && value ? (
									<Text className="text-[#151515] font-regularSFDisplay text-sm">
										{selectedItem.label || selectedItem.name}
									</Text>
								) : (
									<Text className="text-[#98A2B3] font-regularSFDisplay text-sm">
										{placeholder || "Select"}
									</Text>
								)}

								{isOpened ? <ChevronUpIcon /> : <ChevronDownIcon />}
							</View>
						);
					}}
					renderItem={(item, isSelected) => {
						return (
							<View
								style={{
									backgroundColor: isSelected && "#F8F8F8",
								}}
								className="py-2 px-[6px] rounded-md"
							>
								<Text className="text-gray-800">{item.label || item.name}</Text>
							</View>
						);
					}}
					dropdownStyle={{
						borderRadius: 8,
						padding: 14,
						backgroundColor: "#FFFFFF",
					}}
					dropdownOverlayColor="transparent"
				/>
			</View>
			{error && <Text className="mt-2 text-red-500 text-xs">{error}</Text>}
		</View>
	);
};

export default CustomSelectInput;
