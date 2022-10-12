import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import axios from "axios";

function Statistics() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/quiz")
      .then((data) => setData(data.data.data));
  }, []);

  return (
    <div>
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="total" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default Statistics;
