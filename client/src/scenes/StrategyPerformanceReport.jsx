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

// Sample performance data
const strategyPerformance = {
  initialInvestment: 10000,
  finalValue: 18000,
  years: 3,
  peakValue: 20000,
  troughValue: 12000,
};

// Sample market updates (Dummy Data)
const marketUpdates = [
  { date: "2024-01-15", asset: "AAPL", change: "+3.2%" },
  { date: "2024-01-14", asset: "BTC", change: "-2.5%" },
  { date: "2024-01-13", asset: "ETH", change: "+5.1%" },
  { date: "2024-01-12", asset: "GOOGL", change: "+1.8%" },
];

// 📈 Calculate ROI
const calculateROI = (initial, final) => ((final - initial) / initial) * 100;

// 📊 Calculate CAGR
const calculateCAGR = (initial, final, years) =>
  ((Math.pow(final / initial, 1 / years) - 1) * 100).toFixed(2);

// ⚠ Calculate Drawdown Percentage
const calculateDrawdown = (peak, trough) =>
  (((peak - trough) / peak) * 100).toFixed(2);

const StrategyPerformanceReport = () => {
  const roi = calculateROI(
    strategyPerformance.initialInvestment,
    strategyPerformance.finalValue
  );
  const cagr = calculateCAGR(
    strategyPerformance.initialInvestment,
    strategyPerformance.finalValue,
    strategyPerformance.years
  );
  const drawdown = calculateDrawdown(
    strategyPerformance.peakValue,
    strategyPerformance.troughValue
  );

  return (
    <Card
      sx={{
        maxWidth: 850,
        mx: "auto",
        mt: 5,
        p: 3,
        boxShadow: 5,
        borderRadius: 3,
        backgroundColor: "#f9f9f9",
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          sx={{ mb: 3, fontWeight: "bold", color: "#333" }}
        >
          📊 Strategy Performance Report
        </Typography>

        {/* Key Metrics */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 2,
            mt: 3,
            mb: 4,
          }}
        >
          {[
            { label: "ROI", value: `${roi.toFixed(2)}%`, color: "#1976d2" },
            { label: "CAGR", value: `${cagr}%`, color: "#388e3c" },
            { label: "Max Drawdown", value: `${drawdown}%`, color: "#d32f2f" },
          ].map((metric, index) => (
            <Box
              key={index}
              sx={{
                textAlign: "center",
                p: 2,
                bgcolor: "#ffffff",
                borderRadius: 2,
                width: "30%",
                boxShadow: 2,
                borderLeft: `6px solid ${metric.color}`,
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#555" }}
              >
                {metric.label}
              </Typography>
              <Typography
                variant="h5"
                sx={{ color: metric.color, fontWeight: "bold" }}
              >
                {metric.value}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Recent Market Updates */}
        <Typography
          variant="h6"
          sx={{ mt: 4, mb: 2, fontWeight: "bold", color: "#333" }}
        >
          🔥 Recent Market Updates
        </Typography>
        <TableContainer
          component={Paper}
          sx={{ borderRadius: 2, boxShadow: 3 }}
        >
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: "#eceff1" }}>
                <TableCell sx={{ fontWeight: "bold", color: "#333" }}>
                  Date
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", color: "#333" }}>
                  Asset
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", color: "#333" }}>
                  Price Change
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {marketUpdates.map((update, index) => (
                <TableRow
                  key={index}
                  sx={{
                    bgcolor: index % 2 === 0 ? "#ffffff" : "#f5f5f5",
                  }}
                >
                  <TableCell sx={{ color: "#000", fontWeight: "bold" }}>
                    {update.date}
                  </TableCell>
                  <TableCell sx={{ color: "#000", fontWeight: "bold" }}>
                    {update.asset}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: update.change.startsWith("+") ? "green" : "red",
                      fontWeight: "bold",
                    }}
                  >
                    {update.change}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default StrategyPerformanceReport;
