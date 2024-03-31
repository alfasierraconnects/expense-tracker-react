import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

export default function ExpensesChart(props) {
  const canvasRef = useRef(null);
  const valuesForGraph = useRef([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [data, setData] = useState(valuesForGraph);

  useEffect(() => {
    props.list.forEach((el) => {
      valuesForGraph.current[el.date.getMonth()] += el.price;
    });
    setData([...valuesForGraph.current]);
    valuesForGraph.current.forEach((el, index) => {
      valuesForGraph.current[index] = 0;
    });
  }, [props.list]);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");

    // Destroy the existing chart if it exists
    if (window.myChart !== undefined) {
      window.myChart.destroy();
    }

    window.myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: `Expenses for ${props.year}`,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
            data: data,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, [props.year, data]);

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}