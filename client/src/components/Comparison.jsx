import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Line } from "react-chartjs-2";
import { Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary components for charts
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Sample strategies data with monthly returns for better analysis
const strategies = [
  {
    name: "Growth Focus",
    initialInvestment: 10000,
    finalValue: 25000,
    years: 5,
    peakValue: 28000,
    troughValue: 15000,
    monthlyReturns: [5, 6, 7, 6, 8, 6, 7, 6, 6, 5, 6, 7], // Mock data for monthly returns
  },
  {
    name: "Dividend Income",
    initialInvestment: 10000,
    finalValue: 18000,
    years: 5,
    peakValue: 20000,
    troughValue: 14000,
    monthlyReturns: [2, 2.5, 3, 3.5, 2.5, 2, 2.5, 3, 3, 3.5, 3.2, 2.7], // Mock data for monthly returns
  },
  {
    name: "Balanced Strategy",
    initialInvestment: 10000,
    finalValue: 22000,
    years: 5,
    peakValue: 24000,
    troughValue: 17000,
    monthlyReturns: [3, 3.5, 4, 3.8, 4, 3.5, 3, 3.5, 4, 4.2, 3.7, 3.8], // Mock data for monthly returns
  },
];

// 📈 Calculate ROI
const calculateROI = (initial, final) => ((final - initial) / initial) * 100;

// 📊 Calculate CAGR
const calculateCAGR = (initial, final, years) =>
  ((Math.pow(final / initial, 1 / years) - 1) * 100).toFixed(2);

// ⚠ Calculate Drawdown Percentage
const calculateDrawdown = (peak, trough) =>
  (((peak - trough) / peak) * 100).toFixed(2);

// Performance data for charts
const getPerformanceData = (strategies) => {
  return strategies.map((strategy) => ({
    name: strategy.name,
    data: strategy.monthlyReturns.map((returnRate, index) => ({
      x: `Month ${index + 1}`,
      y: returnRate,
    })),
  }));
};

// Risk-Return scatter data
const getRiskReturnData = (strategies) => {
  return strategies.map((strategy) => ({
    x: calculateDrawdown(strategy.peakValue, strategy.troughValue), // Drawdown (risk)
    y: calculateROI(strategy.initialInvestment, strategy.finalValue), // ROI (return)
  }));
};

const Comparison = () => {
  // Calculate performance metrics for each strategy
  const strategyData = strategies.map((strategy) => ({
    ...strategy,
    ROI: calculateROI(strategy.initialInvestment, strategy.finalValue),
    CAGR: calculateCAGR(
      strategy.initialInvestment,
      strategy.finalValue,
      strategy.years
    ),
    Drawdown: calculateDrawdown(strategy.peakValue, strategy.troughValue),
  }));

  // Find the highest ROI, CAGR, and Drawdown
  const highestROI = Math.max(...strategyData.map((s) => s.ROI));
  const highestCAGR = Math.max(...strategyData.map((s) => s.CAGR));
  const lowestDrawdown = Math.min(...strategyData.map((s) => s.Drawdown));

  // Chart Data for Line and Scatter Plot
  const performanceChartData = getPerformanceData(strategies);
  const riskReturnData = getRiskReturnData(strategies);

  return (
    <Card sx={{ maxWidth: 1000, mx: "auto", mt: 5, p: 3 }}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2 }}>
          📊 Strategy Comparison Report
        </Typography>

        {/* Performance Table */}
        <TableContainer
          component={Paper}
          sx={{ borderRadius: 2, boxShadow: 3, mb: 3 }}
        >
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: "#eceff1" }}>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    color: "#333",
                    fontSize: "1.1rem",
                    textTransform: "uppercase",
                  }}
                >
                  Strategy
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    color: "#333",
                    fontSize: "1.1rem",
                    textTransform: "uppercase",
                  }}
                >
                  ROI (%)
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    color: "#333",
                    fontSize: "1.1rem",
                    textTransform: "uppercase",
                  }}
                >
                  CAGR (%)
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    color: "#333",
                    fontSize: "1.1rem",
                    textTransform: "uppercase",
                  }}
                >
                  Max Drawdown (%)
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {strategyData.map((strategy, index) => (
                <TableRow
                  key={index}
                  sx={{
                    bgcolor: index % 2 === 0 ? "#ffffff" : "#f5f5f5",
                  }}
                >
                  <TableCell sx={{ color: "#000", fontWeight: "bold" }}>
                    {strategy.name}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      color: strategy.ROI === highestROI ? "#388e3c" : "#000", // Green for highest ROI
                    }}
                  >
                    {strategy.ROI.toFixed(2)}%
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      color: strategy.CAGR === highestCAGR ? "#388e3c" : "#000", // Green for highest CAGR
                    }}
                  >
                    {strategy.CAGR}%
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      color:
                        strategy.Drawdown === lowestDrawdown
                          ? "#388e3c"
                          : "#000", // Green for lowest Drawdown
                    }}
                  >
                    {strategy.Drawdown}%
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Performance Line Chart */}
        <Typography variant="h6" sx={{ mb: 2 }}>
          📈 Strategy Performance Over Time
        </Typography>
        <Line
          data={{
            labels: [
              "Month 1",
              "Month 2",
              "Month 3",
              "Month 4",
              "Month 5",
              "Month 6",
              "Month 7",
              "Month 8",
              "Month 9",
              "Month 10",
              "Month 11",
              "Month 12",
            ],
            datasets: performanceChartData.map((strategy) => ({
              label: strategy.name,
              data: strategy.data.map((point) => point.y),
              borderColor:
                "#" + Math.floor(Math.random() * 16777215).toString(16),
              fill: false,
            })),
          }}
          options={{
            responsive: true,
            scales: {
              x: {
                title: {
                  display: true,
                  text: "Months",
                  color: "#1976d2", // Color for X axis title
                },
                grid: {
                  color: "#e0e0e0", // Color for X axis grid
                },
                ticks: {
                  color: "#d3d3d3", // Color for X axis tick marks
                },
              },
              y: {
                title: {
                  display: true,
                  text: "Returns (%)",
                  color: "#1976d2", // Color for Y axis title
                },
                grid: {
                  color: "#e0e0e0", // Color for Y axis grid
                },
                ticks: {
                  color: "#d3d3d3", // Color for Y axis tick marks
                },
                beginAtZero: true,
              },
            },
          }}
        />

        {/* Risk-Return Scatter Plot */}
        <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
          📉 Risk vs Return
        </Typography>
        <Scatter
          data={{
            datasets: [
              {
                label: "Strategies",
                data: riskReturnData,
                backgroundColor: "rgba(75, 192, 192, 0.6)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
              },
            ],
          }}
          options={{
            responsive: true,
            scales: {
              x: {
                title: {
                  display: true,
                  text: "Max Drawdown (%)",
                  color: "#1976d2", // Color for X axis title
                },
                grid: {
                  color: "#e0e0e0", // Color for X axis grid
                },
                ticks: {
                  color: "#d3d3d3", // Color for X axis tick marks
                },
                beginAtZero: true,
              },
              y: {
                title: {
                  display: true,
                  text: "ROI (%)",
                  color: "#1976d2", // Color for Y axis title
                },
                grid: {
                  color: "#e0e0e0", // Color for Y axis grid
                },
                ticks: {
                  color: "#d3d3d3", // Color for Y axis tick marks
                },
                beginAtZero: true,
              },
            },
          }}
        />
      </CardContent>
    </Card>
  );
};

export default Comparison;
