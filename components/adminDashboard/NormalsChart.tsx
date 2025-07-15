import inter from "@/fonts/inter-medium.ttf";
import type { NormalsChartItem } from "@/types/adminDashboard";
import { useFont } from "@shopify/react-native-skia";
import { Text, View } from "react-native";
import { BarGroup, CartesianChart } from "victory-native";

interface NormalsChartProps {
  normalData: NormalsChartItem[];
  increaseNormalRate?: number;
}

export default function NormalsChart(props: NormalsChartProps) {
  const { normalData, increaseNormalRate } = props;
  const font = useFont(inter, 12);
  return (
    <View className="bg-black border-gray-700 border-2 gap-0 w-full h-full flex flex-col p-4 rounded-lg">
      <View className="flex-shrink-0">
        <View className="flex flex-row justify-between items-center">
          <View>
            <Text className="text-gray-400 text-lg sm:text-xl font-normal">
              Normals Chart
            </Text>
          </View>
          <View>
            <Text className="text-gray-400 text-lg sm:text-xl">
              + {increaseNormalRate ?? "0"}%
            </Text>
          </View>
        </View>
      </View>
      <View className="flex-1 flex">
        <View className="w-full h-60">
          <CartesianChart
            data={normalData}
            xKey="name"
            yKeys={["uv", "pv"]}
            // domain={{ y: [0, 1500] }} // y-axis starts at 0
            padding={{ top: 30, bottom: 30 }}
            domainPadding={{ left: 30, right: 30 }}
            xAxis={{
              lineWidth: 0,
              labelColor: "#9CA3AF",
            }}
            yAxis={[
              {
                font,
                tickValues: [50, 500, 950, 1400],
                lineWidth: 0,
                labelColor: "#9CA3AF",
                formatYLabel: (label) => {
                  return `$${label}`;
                },
              },
            ]}
          >
            {({ points, chartBounds }) => (
              <BarGroup
                chartBounds={chartBounds}
                betweenGroupPadding={0.5}
                barWidth={20}
              >
                <BarGroup.Bar
                  // chartBounds={chartBounds}
                  points={points.uv}
                  color={"#6d62f7"}
                // barWidth={20}
                />
                <BarGroup.Bar
                  // chartBounds={chartBounds}
                  points={points.pv}
                  color={"#544bbe"}
                // roundedCorners={{
                //   topLeft: 2,
                //   topRight: 2,
                // }}
                // barWidth={20}
                />
              </BarGroup>
            )}
          </CartesianChart>
        </View>
      </View>
    </View>
  );
}
