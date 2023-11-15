import React from "react";
import { View, Text, SafeAreaView, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import CustomTextInput from "./text-input";

interface BasicHeaderParams {
  name?: string;
  hasClose?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  hasBack?: boolean;
  hasSearch?: boolean;
  backHandler?: () => void;
}
/**
 * Dynamic header that allows for customization
 *
 * @param {*} {
 *   name,
 *   hasClose,
 *   leftIcon,
 *   rightIcon,
 *   hasBack,
 *   backHandler,
 * }
 * @return {*}
 */
export const BasicHeader: React.FC<BasicHeaderParams> = ({
  name,
  leftIcon,
  rightIcon,
  hasClose,
  hasBack,
  hasSearch,
  backHandler,
}) => {
  return (
    <View className="py-4 bg-[#00406E]">
      <View className="px-4">
        <SafeAreaView>
          <View className="flex flex-row justify-center items-center">
            <View className="w-8">
              {hasBack ? (
                <Pressable onPress={backHandler}>
                  <Ionicons name="chevron-back" size={18} color="#6B95BB" />
                </Pressable>
              ) : (
                leftIcon
              )}
            </View>
            <Text className="text-white ml-auto text-base font-semibold text-white mr-auto font-Poppins_600">
              {name}
            </Text>
            <View className="w-8">
              {hasClose ? (
                <Ionicons
                  onPress={backHandler}
                  name="close"
                  size={28}
                  color="#6B95BB"
                />
              ) : (
                rightIcon
              )}
            </View>
          </View>
          {hasSearch && (
            <View className="mt-2.5">
              <CustomTextInput
                leftIcon={
                  <MaterialIcons name="search" color="white" size={20} />
                }
                containerStyle="rounded bg-[#96B4D137] text-white border border-transparent h-10 items-center"
                inputStyle="font-Poppins_400 text-white text-sm"
                placeholder="Search"
                placeholderTextColor={"#C9C9C9"}
              />
            </View>
          )}
        </SafeAreaView>
      </View>
    </View>
  );
};
