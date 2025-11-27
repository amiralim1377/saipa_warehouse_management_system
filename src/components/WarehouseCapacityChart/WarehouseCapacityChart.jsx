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

  const formattedData = data.map((item) => ({
    ...item,
    shortName:
      item.name.length > 12 ? item.name.slice(0, 12) + "..." : item.name,
  }));

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
      {title && <h3 className="text-xl font-bold mb-6 text-center">{title}</h3>}

      <ResponsiveContainer width="100%" height={360}>
        <BarChart
          data={formattedData}
          margin={{ top: 10, right: 20, left: 0, bottom: 80 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
          <XAxis
            dataKey="shortName"
            tick={{
              fill: "var(--color-foreground)",
              fontSize: 13,
              fontWeight: 500,
            }}
            interval={0}
            textAnchor="middle"
            angle={0}
            dy={10}
          />
          <YAxis
            tick={{
              fill: "var(--color-foreground)",
              fontSize: 13,
              fontWeight: 500,
            }}
            axisLine={true}
            tickLine={false}
            width={50}
            mirror={false}
            tickMargin={25}
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
            formatter={(value, name, props) => {
              const fullName = props.payload.name;
              return [value, fullName];
            }}
          />
          <Bar dataKey="capacity" radius={[6, 6, 0, 0]} barSize={150}>
            {formattedData.map((_, index) => (
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
