import SimpleHorizontalBarChart from "@/components/customUI/SimpleHorizontalBarChart";
import inter from "@/fonts/inter-medium.ttf";
import type { NewEmployesItem } from "@/types/userDashboard";
import { useFont } from "@shopify/react-native-skia";
import { Text, View } from "react-native";

interface SolidProductsProps {
  normalData: NewEmployesItem[];
}

export default function SolidProducts(props: SolidProductsProps) {
  const { normalData } = props;
  const font = useFont(inter, 12);
  const maxX = Math.max(...normalData.map((d) => d.value), 1);

  return (
    <View className="bg-black border-gray-700 border-2 gap-0 w-full h-full flex flex-col rounded-lg">
      <View className="flex flex-row justify-between items-center p-4">
        <Text className="text-gray-400 text-lg sm:text-xl font-normal">
          New Employes
        </Text>
        <View className="flex flex-row justify-right items-center gap-2">
          <View
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: "#3dd34c",
              marginRight: 4,
            }}
          />
          <Text className="text-white text-xs sm:text-base">Coders</Text>
          <View
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: "#2280ff",
              marginRight: 4,
              marginLeft: 12,
            }}
          />
          <Text className="text-white text-xs sm:text-base">Designers</Text>
        </View>
      </View>
      <View className="w-full flex-1 flex w-full">
        <SimpleHorizontalBarChart data={normalData} />
      </View>
      <View className="flex flex-row justify-between items-center p-4">
        <Text className="text-white text-xs sm:text-base">2021</Text>
        <Text className="text-white text-xs sm:text-base">2022</Text>
      </View>
    </View>
  );
}
