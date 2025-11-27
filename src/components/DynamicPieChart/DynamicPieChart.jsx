"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const defaultColors = ["#008000", "#ff0000", "#FFC107", "#2196F3", "#9C27B0"];

const renderCustomLabel = ({
  cx,
  cy,
  midAngle,
  outerRadius,
  percent,
  index,
}) => {
  const RADIAN = Math.PI / 180;
  const radius = outerRadius + 48;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  const sliceColor = defaultColors[index % defaultColors.length];

  return (
    <text
      x={x}
      y={y}
      fill={sliceColor}
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize={18}
      fontWeight={600}
      stroke="#fff"
      strokeWidth={0.1}
    >
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};

export default function DynamicPieChart({
  title,
  data,
  isAnimationActive = true,
}) {
  if (!data || data.length === 0) return null;

  return (
    <div className="max-w-[500px] w-full mx-auto p-4 border border-gray-300 rounded-lg shadow-sm">
      {title && (
        <h3 className="text-center mb-4 font-semibold sidebar-foreground">
          {title}
        </h3>
      )}

      <ResponsiveContainer width="100%" height={350}>
        <PieChart className="p-3">
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius="80%"
            labelLine={true}
            label={renderCustomLabel}
            isAnimationActive={isAnimationActive}
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={defaultColors[index % defaultColors.length]}
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              borderRadius: "10px",
              padding: "12px 14px",
            }}
            itemStyle={{
              fontSize: "10px",
              fontWeight: 400,
              color: "#1f2937",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
