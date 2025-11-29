"use client";

import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function InventoryLineChart({ data }) {
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    if (!data || data.length === 0) return;

    const sortedData = [...data].sort((a, b) => b.id - a.id);

    // بررسی سایز صفحه
    const isMobile = window.innerWidth < 640;

    const filteredData = isMobile
      ? sortedData.slice(0, 6).reverse()
      : sortedData;

    const formattedData = filteredData.map((item) => ({
      name:
        item.part_name.length > 15
          ? item.part_name.slice(0, 15) + "..."
          : item.part_name,
      fullName: item.part_name,
      stock: item.stock,
      shortage: item.shortage,
    }));

    setDisplayData(formattedData);
  }, [data]);

  if (!data || data.length === 0) return <p>داده‌ای برای نمایش وجود ندارد.</p>;

  return (
    <div className="w-full p-6 rounded-2xl shadow-lg bg-[var(--card)] text-[var(--card-foreground)]">
      <h2 className="text-xl font-bold mb-6 text-center">
        📈 روند موجودی و کمبود قطعات
      </h2>
      <div className="w-full h-[500px] overflow-x-auto">
        <div
          style={{ minWidth: `${displayData.length * 100}px`, height: "100%" }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={displayData}
              margin={{ top: 20, right: 30, left: 10, bottom: 60 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis
                dataKey="fullName"
                interval={0}
                height={80}
                tickMargin={20}
                tick={<CustomTick />}
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
                wrapperClassName="rounded-lg shadow-md bg-[var(--popover)] text-[var(--popover-foreground)]"
                formatter={(value, name) =>
                  name === "stock"
                    ? [`${value}`, "موجودی"]
                    : [`${value}`, "کمبود"]
                }
              />
              <Legend
                className="pt-5"
                formatter={(value) =>
                  value === "stock" ? "✅ موجودی" : "❌ کمبود"
                }
              />
              <Line
                type="monotone"
                dataKey="stock"
                stroke="green"
                strokeWidth={3}
                dot={{ r: 5 }}
              />
              <Line
                type="monotone"
                dataKey="shortage"
                stroke="red"
                strokeWidth={3}
                dot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

const CustomTick = ({ x, y, payload }) => {
  const displayName =
    payload.value.length > 15
      ? payload.value.slice(0, 15) + "..."
      : payload.value;

  return (
    <g transform={`translate(${x},${y})`}>
      <title>{payload.value}</title>
      <text
        y={0}
        dy={16}
        textAnchor="middle"
        className="text-[10px] fill-[var(--muted-foreground)]"
      >
        {displayName}
      </text>
    </g>
  );
};
