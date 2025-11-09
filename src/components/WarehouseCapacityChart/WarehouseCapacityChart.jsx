"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

export default function WarehouseCapacityChart({ title, data }) {
  if (!data || data.length === 0) return null;

  const chartColors = [
    "var(--color-chart-1)",
    "var(--color-chart-2)",
    "var(--color-chart-3)",
    "var(--color-chart-4)",
    "var(--color-chart-5)",
  ];

  return (
    <div
      style={{
        width: "100%",
        margin: "0 auto",
        backgroundColor: "var(--color-card)",
        borderRadius: "var(--radius-xl)",
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        padding: "1.5rem",
        color: "var(--color-card-foreground)",
      }}
    >
      {title && (
        <h3
          style={{
            textAlign: "center",
            marginBottom: "1.5rem",
            fontWeight: 600,
            color: "var(--color-card-foreground)",
          }}
        >
          {title}
        </h3>
      )}

      <ResponsiveContainer width="100%" height={360}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 20, left: 0, bottom: 80 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
          <XAxis
            dataKey="name"
            tick={{
              fill: "var(--color-foreground)",
              fontSize: 13,
              fontWeight: 500,
            }}
            interval={0}
            textAnchor="middle"
            angle={-30}
            dy={15}
          />
          <YAxis
            tick={{
              fill: "var(--color-foreground)",
              fontSize: 13,
              fontWeight: 500,
            }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--color-popover)",
              borderRadius: "var(--radius-md)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              padding: "8px 12px",
              color: "var(--color-popover-foreground)",
            }}
            itemStyle={{
              fontSize: "14px",
              fontWeight: 500,
              color: "var(--color-popover-foreground)",
            }}
          />
          <Bar dataKey="capacity" radius={[6, 6, 0, 0]}>
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={chartColors[index % chartColors.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
