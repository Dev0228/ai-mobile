import LineChart from "@/components/customUI/LineChart";
import type { CodersTypeItem } from "@/types/userDashboard";
import { Text, View } from "react-native";

interface CodersTypesProps {
  codersTypeData: CodersTypeItem[];
}

export default function CodersTypes(props: CodersTypesProps) {
  const { codersTypeData } = props;

  return (
    <View className="bg-black border-gray-700 border-2 w-full h-full flex flex-col rounded-lg">
      <View className="pb-2 flex-shrink-0">
        <View className="flex flex-row justify-between items-center p-4">
          <Text className="text-gray-400 text-lg sm:text-xl font-normal">
            Coders types
          </Text>
          <View className="flex flex-row">
            <Text className="bg-blue-400 text-black font-medium rounded mr-4 text-xs px-4 py-1">
              React
            </Text>
            <Text className="bg-green-400 text-black font-medium rounded mr-4 text-xs px-4 py-1">
              Jscript
            </Text>
          </View>
        </View>
      </View>
      <View className="flex-1 flex">
        <View className="w-full h-full">
          <LineChart data={codersTypeData} />
        </View>
      </View>
    </View>
  );
}
