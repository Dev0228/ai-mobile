import MultiRing from "@/customUI/MultiRing";
import type { LastIncomeItem } from "@/types/adminDashboard";
import React from "react";
import { Dimensions, Text, View } from "react-native";

export interface LastIncomeProps {
  lastIncomeData: LastIncomeItem[];
  increaseIncomeRate?: number;
  increaseIncomeValue?: number;
}

export default function LastData(props: LastIncomeProps) {
  const { lastIncomeData, increaseIncomeRate, increaseIncomeValue } = props;

  const screenWidth = Dimensions.get("window").width;

  return (
    <View className="bg-black border-2 border-gray-700 w-full h-full flex flex-col rounded-lg">
      {/* Card Header */}
      <View className="pb-2 flex-shrink-0 p-4 flex-row justify-between items-center">
        <Text className="text-gray-400 text-lg font-normal">Last Incomes</Text>
        <Text className="text-gray-400 text-lg font-normal">
          +{increaseIncomeRate}%
        </Text>
      </View>

      {/* Card Content */}
      <View className="flex flex-row justify-between p-4 sm:pb-8 gap-4 sm:gap-0">
        <View>
          <Text
            className="bg-green-400 hover:bg-green-600 text-black font-medium px-4 py-2 rounded text-xs sm:text-base"
            style={{ backgroundColor: "#323232" }}
          >
            Apr - Jan
          </Text>
        </View>
        <View className="relative mx-auto">
          <MultiRing
            centerX={50}
            centerY={50}
            innerRadius={25}
            outerRadius={35}
            startAngleDeg={0}
            endAngleDeg={290}
            segments={lastIncomeData}
            direction="counterclockwise"
          />
        </View>
        <View className="relative flex flex-col justify-between text-right">
          <Text className="text-white text-xs sm:text-sm">month to month</Text>
          <Text className="text-white text-xs sm:text-sm">
            Increase : ${increaseIncomeValue ?? "0"}
          </Text>
        </View>
      </View>
      <View className="flex flex-row gap-2 justify-start px-4">
        <Text className="bg-green-400 text-black font-medium px-4 py-2 rounded text-xs sm:text-base">
          GNote
        </Text>
        <Text
          className="bg-gray-700 hover:bg-gray-600 text-black font-medium px-4 py-2 rounded text-xs sm:text-base"
          style={{ backgroundColor: "#414caa" }}
        >
          Office
        </Text>
        <Text className="bg-blue-500 hover:bg-blue-600 text-black font-medium px-4 py-2 rounded text-xs sm:text-base">
          RCloud
        </Text>
      </View>
    </View>
  );
}
