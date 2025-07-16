import React, { useState } from "react";
import { LayoutChangeEvent, View } from "react-native";

export interface BarChartDatum {
  name: string;
  value: number;
  fill: string;
}

interface SimpleHorizontalBarChartProps {
  data: BarChartDatum[];
}

const HORIZONTAL_PADDING = 16;
const VALUE_WIDTH = 32;
const BAR_MARGIN = 2;
const EXTRA_MARGIN = 2;

const SimpleHorizontalBarChart: React.FC<SimpleHorizontalBarChartProps> = ({
  data,
}) => {
  const [parentWidth, setParentWidth] = useState(0);
  const [parentHeight, setParentHeight] = useState(0);

  const handleLayout = (e: LayoutChangeEvent) => {
    setParentWidth(e.nativeEvent.layout.width);
    setParentHeight(e.nativeEvent.layout.height);
  };
  const maxValue = Math.max(...data.map((d) => d.value), 1);
  const barHeight =
    parentHeight && data.length
      ? Math.max(Math.floor(parentHeight / data.length) - BAR_MARGIN, 8)
      : 24;

  const availableBarWidth =
    parentWidth -
    2 * HORIZONTAL_PADDING -
    VALUE_WIDTH -
    BAR_MARGIN -
    EXTRA_MARGIN;

  return (
    <View
      style={{ flex: 1, padding: HORIZONTAL_PADDING }}
      onLayout={handleLayout}
    >
      {parentWidth > 0 &&
        parentHeight > 0 &&
        data.map((item, idx) => (
          <View
            key={idx}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: BAR_MARGIN,
            }}
          >
            <View
              style={{
                height: barHeight,
                width: (item.value / maxValue) * availableBarWidth,
                backgroundColor: item.fill,
                marginRight: 8,
                minWidth: 2,
              }}
            />
          </View>
        ))}
    </View>
  );
};

export default SimpleHorizontalBarChart;
