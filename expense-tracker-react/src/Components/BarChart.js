import React from "react";
import { Bar } from "react-chartjs-2";

export default function BarChart({ expenses }) {
  // Prepare data for the chart
  const data = {
    labels: getMonths(expenses),
    datasets: [
      {
        label: "Total Purchases",
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.4)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: getMonthlyTotal(expenses),
      },
    ],
  };

  // Options for the chart
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div>
      <h2>Purchases by Month</h2>
      <Bar data={data} options={options} />
    </div>
  );
}

// Helper function to get unique months
function getMonths(expenses) {
  const months = [];
  expenses.forEach((expense) => {
    const month = expense.date.toLocaleString("en-US", { month: "long" });
    if (!months.includes(month)) {
      months.push(month);
    }
  });
  return months;
}

// Helper function to get total purchases for each month
function getMonthlyTotal(expenses) {
  const monthlyTotal = {};
  expenses.forEach((expense) => {
    const month = expense.date.toLocaleString("en-US", { month: "long" });
    if (monthlyTotal[month]) {
      monthlyTotal[month] += expense.price;
    } else {
      monthlyTotal[month] = expense.price;
    }
  });
  return Object.values(monthlyTotal);
}
