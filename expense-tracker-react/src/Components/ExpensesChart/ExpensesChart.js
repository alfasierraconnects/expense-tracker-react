import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function ExpensesChart() {
  const canvasRef = useRef(null);

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
            label: `Expenses for someYear`,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
            data: [3, 2, 2, 6, 4],
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
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} id="expense-chart"></canvas>
    </div>
  );
}
