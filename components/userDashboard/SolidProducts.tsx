import MultiRing from "@/components/customUI/MultiRing";
import type { LastIncomeItem } from "@/types/adminDashboard";
import React from "react";
import { Text, View } from "react-native";

interface NewEmployesProps {
  solidProductsData1: LastIncomeItem[];
  solidProductsData2: LastIncomeItem[];
  increaseSolidRate?: number[];
}

export default function NewEmployes(props: NewEmployesProps) {
  const { solidProductsData1, solidProductsData2, increaseSolidRate } = props;

  return (
    <View className="bg-black border-gray-700 border-2 w-full h-full flex flex-col rounded-lg">
      <View className="flex flex-row justify-between items-center mb-4 py-4 px-8">
        <Text className="text-white text-lg sm:text-xl font-normal">
          Solid Products
        </Text>
        <Text className="text-white text-xs sm:text-xl">Mar - Jan 2022</Text>
      </View>
      <View className="flex flex-row sm:flex-row items-center justify-between p-4">
        <View className="relative w-28 h-28 sm:w-40 sm:h-40 flex">
          <MultiRing
            centerX={50}
            centerY={50}
            innerRadius={23}
            outerRadius={30}
            startAngleDeg={10}
            endAngleDeg={270}
            segments={solidProductsData1}
          />
          <Text className="absolute top-6 left-20 text-white text-xs sm:text-xl w-12 sm:w-16">
            + {increaseSolidRate ? increaseSolidRate[0] : "0"}%
          </Text>
        </View>
        <View className="relative w-28 h-28 flex">
          <MultiRing
            centerX={50}
            centerY={50}
            innerRadius={23}
            outerRadius={30}
            startAngleDeg={40}
            endAngleDeg={270}
            segments={solidProductsData2}
          />
          <Text className="absolute top-6 left-20 text-white text-xs sm:text-xl w-12 sm:w-16">
            + {increaseSolidRate ? increaseSolidRate[1] : "0"}%
          </Text>
        </View>
        <Text className="bg-white text-xs text-black font-medium rounded px-4 py-2">
          JavaScript
        </Text>
      </View>
    </View>
  );
}
