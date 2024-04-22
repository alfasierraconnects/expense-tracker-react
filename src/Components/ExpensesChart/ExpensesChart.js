import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

export default function ExpensesChart(props) {
  const { year, list } = props;
  const canvasRef = useRef(null);
  const valuesForGraph = useRef([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [data, setData] = useState(valuesForGraph);

  useEffect(() => {
    list.length !== 0 &&
      list.forEach((el) => {
        valuesForGraph.current[el.date.getMonth()] += el.price;
      });
    setData([...valuesForGraph.current]);
    valuesForGraph.current.forEach((el, index) => {
      valuesForGraph.current[index] = 0;
    });
  }, [list]);

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
            label: `Expenses for ${year}`,
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
            ticks: {
              color: "white", // Color of Y-axis labels
              font: {
                weight: "bold", // Font weight of Y-axis labels
                size: 15,
              },
            },
          },
          x: {
            ticks: {
              color: "white", // Color of X-axis labels
              font: {
                weight: "bold", // Font weight of X-axis labels
                size: 15,
              },
            },
          },
        },
        plugins: {
          title: {
            display: true,
            text: `Expenses for ${year} (₹)`,
            color: "white", // Color of chart title
            font: {
              weight: "bold", // Font weight of chart title
              size: 20,
            },
          },
        },
      },
    });
  }, [year, data]);

  return (
    <div className="bg-slate-800 p-4 rounded-lg shadow-lg">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}
