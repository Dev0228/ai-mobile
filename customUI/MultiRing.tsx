import Svg, { Path } from "react-native-svg";

export interface RingSegmentData {
  value: number;
  color: string;
}

export interface MultiRingProps {
  centerX: number;
  centerY: number;
  innerRadius: number;
  outerRadius: number;
  segments: RingSegmentData[];
  startAngleDeg?: number; // optional, default 0
  endAngleDeg?: number; // optional, default 360
  direction?: "clockwise" | "counterclockwise"; // default: "clockwise"
}

const polarToCartesian = (
  centerX: number,
  centerY: number,
  radius: number,
  angle: number
) => ({
  x: centerX + radius * Math.cos(angle),
  y: centerY + radius * Math.sin(angle),
});

const describeArc = (
  centerX: number,
  centerY: number,
  innerRadius: number,
  outerRadius: number,
  startAngle: number,
  endAngle: number
) => {
  const outerStart = polarToCartesian(
    centerX,
    centerY,
    outerRadius,
    startAngle
  );
  const outerEnd = polarToCartesian(centerX, centerY, outerRadius, endAngle);
  const innerStart = polarToCartesian(centerX, centerY, innerRadius, endAngle);
  const innerEnd = polarToCartesian(centerX, centerY, innerRadius, startAngle);
  const largeArcFlag = endAngle - startAngle > Math.PI ? 1 : 0;
  const sweepFlag = 1;
  return `
    M ${outerStart.x} ${outerStart.y}
    A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} ${sweepFlag} ${outerEnd.x} ${outerEnd.y}
    L ${innerStart.x} ${innerStart.y}
    A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${innerEnd.x} ${innerEnd.y}
    Z
  `;
};

const MultiRing = ({
  centerX,
  centerY,
  innerRadius,
  outerRadius,
  segments,
  startAngleDeg = 0,
  endAngleDeg = 360,
  direction = "clockwise",
}: MultiRingProps) => {
  const total = segments.reduce((sum, seg) => sum + seg.value, 0);
  const startRad = (startAngleDeg * Math.PI) / 180;
  const endRad = (endAngleDeg * Math.PI) / 180;
  const angleSpan = endRad - startRad;

  let currentAngle = startRad;

  return (
    <Svg height={outerRadius * 2 + 20} width={outerRadius * 2 + 20}>
      {segments.map((seg, i) => {
        const segAngle = (seg.value / total) * angleSpan;
        let nextAngle;
        if (direction === "counterclockwise") {
          nextAngle = currentAngle - segAngle;
          // Swap start/end for drawing
          const path = describeArc(
            centerX,
            centerY,
            innerRadius,
            outerRadius,
            nextAngle,
            currentAngle
          );
          currentAngle = nextAngle;
          return <Path key={i} d={path} fill={seg.color} fillRule="evenodd" />;
        } else {
          // Default: clockwise
          nextAngle = currentAngle + segAngle;
          const path = describeArc(
            centerX,
            centerY,
            innerRadius,
            outerRadius,
            currentAngle,
            nextAngle
          );
          currentAngle = nextAngle;
          return <Path key={i} d={path} fill={seg.color} fillRule="evenodd" />;
        }
      })}
    </Svg>
  );
};

export default MultiRing;
