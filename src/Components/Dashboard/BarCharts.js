import React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export function SimpleBarChart(props) {
  return (
    <BarChart width={700} height={300} data={props.data} >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={props.xAxisKey} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey={props.dataKey} fill={props.color} />
    </BarChart>
  );
}
