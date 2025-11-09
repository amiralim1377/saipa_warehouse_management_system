"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const defaultColors = ["#4CAF50", "#F44336", "#FFC107", "#2196F3", "#9C27B0"];

const renderCustomLabel = ({
  cx,
  cy,
  midAngle,
  outerRadius,
  percent,
  index,
}) => {
  const RADIAN = Math.PI / 180;
  const radius = outerRadius + 50;
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
      fontSize={13}
      fontWeight={600}
      stroke="#fff"
      strokeWidth={0.5}
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
    <div style={{ width: "100%", maxWidth: "500px", margin: "0 auto" }}>
      {title && (
        <h3
          style={{
            textAlign: "center",
            marginBottom: "1rem",
            fontWeight: "600",
            color: "#333",
          }}
        >
          {title}
        </h3>
      )}

      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
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
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              padding: "8px 12px",
            }}
            itemStyle={{ fontSize: "14px", fontWeight: 500 }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
