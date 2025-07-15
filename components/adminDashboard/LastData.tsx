import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import inter from "@/fonts/inter-medium.ttf";
import type { LastDataItem } from "@/types/adminDashboard";
import { useFont } from "@shopify/react-native-skia";
import { Dimensions, View } from "react-native";
import { Bar, CartesianChart } from "victory-native";

interface LastDataProps {
  lastData: LastDataItem[];
}

export default function LastData(props: LastDataProps) {
  const { lastData } = props;
  const screenWidth = Dimensions.get("window").width;
  const font = useFont(inter, 12);
  const maxY = Math.max(...lastData.map((d) => d.value), 1);
  return (
    <Card className="bg-black border-gray-700 border-2 w-full h-full flex flex-col">
      <CardHeader className="pb-2 flex-shrink-0">
        <View className="flex justify-between items-center">
          <CardTitle className="text-gray-400 text-lg sm:text-xl font-normal">
            Last Data
          </CardTitle>
        </View>
      </CardHeader>
      <CardContent className="flex-1 flex">
        <View className="w-full flex-1 h-40">
          <CartesianChart
            data={lastData}
            xKey="name"
            yKeys={["value"]}
            domain={{ y: [0, maxY] }} // y-axis starts at 0
            padding={{ bottom: 10 }}
            domainPadding={{ left: 10, right: 10 }}
            xAxis={{
              font,
              lineWidth: 0,
              labelColor: "#9CA3AF",
            }}
            yAxis={[
              {
                lineWidth: 0,
                lineColor: "#9CA3AF",
              },
            ]}
          >
            {({ points, chartBounds }) => (
              <Bar
                chartBounds={chartBounds}
                points={points.value}
                color={"#4f46e5"}
                roundedCorners={{
                  topLeft: 2,
                  topRight: 2,
                }}
                barWidth={20}
              />
            )}
          </CartesianChart>
        </View>
      </CardContent>
    </Card>
  );
}
