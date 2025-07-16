import inter from "@/fonts/inter-medium.ttf";
import { CodersTypeItem } from "@/types/userDashboard";
import { useFont } from "@shopify/react-native-skia";
import React from "react";
import { View } from "react-native";
import { CartesianChart, Line, Scatter } from "victory-native";

interface CodersTypeLineChartProps {
  data: CodersTypeItem[];
  style?: object;
}

const CodersTypeLineChart: React.FC<CodersTypeLineChartProps> = ({
  data,
  style,
}) => {
  const maxY = Math.max(...data.flatMap((d) => [d.uv, d.pv]), 1);

  const font = useFont(inter, 12);

  return (
    <View className="h-full">
      <CartesianChart
        data={data}
        xKey="name"
        yKeys={["uv", "pv"]}
        domain={{ y: [0, maxY] }}
        padding={{ left: 20, right: 20, top: 10, bottom: 20 }}
        domainPadding={{ left: 10, right: 10 }}
        xAxis={{
          font,
          labelColor: "#9CA3AF",
          lineWidth: 0,
        }}
        yAxis={[
          {
            labelColor: "#9CA3AF",
            lineWidth: 0,
          },
        ]}
      >
        {({ points }) => (
          <>
            <Line points={points.uv} color="#2280ff" strokeWidth={3} />
            <Scatter points={points.uv} color="#2280ff" radius={6} />
            <Scatter points={points.uv} color="#000000" radius={4} />
            <Line points={points.pv} color="#3dd34c" strokeWidth={3} />
            <Scatter points={points.pv} color="#3dd34c" radius={6} />
            <Scatter points={points.pv} color="#000000" radius={4} />
          </>
        )}
      </CartesianChart>
    </View>
  );
};

export default CodersTypeLineChart;
