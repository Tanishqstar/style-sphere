import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  { style: "Casual", value: 75 },
  { style: "Formal", value: 60 },
  { style: "Trendy", value: 85 },
  { style: "Classic", value: 70 },
  { style: "Sporty", value: 40 },
  { style: "Bohemian", value: 55 },
];

const StyleRadarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <RadarChart data={data} cx="50%" cy="50%" outerRadius="70%">
        <PolarGrid stroke="hsl(240 6% 20%)" />
        <PolarAngleAxis
          dataKey="style"
          tick={{ fill: "hsl(240 5% 50%)", fontSize: 11, fontFamily: "Inter" }}
        />
        <Radar
          name="Style"
          dataKey="value"
          stroke="hsl(42 90% 55%)"
          fill="hsl(42 90% 55%)"
          fillOpacity={0.15}
          strokeWidth={2}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default StyleRadarChart;
