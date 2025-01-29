import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Box,
} from "@mui/material";

// Sample investment data
const investmentData = {
  "Portfolio Growth": [
    { month: "Jan", value: 10000 },
    { month: "Feb", value: 12000 },
    { month: "Mar", value: 15000 },
    { month: "Apr", value: 13000 },
    { month: "May", value: 18000 },
  ],
  "Asset Allocation": [
    { category: "Stocks", value: 50 },
    { category: "Bonds", value: 20 },
    { category: "Crypto", value: 15 },
    { category: "Real Estate", value: 10 },
    { category: "Cash", value: 5 },
  ],
  "Profit/Loss": [
    { strategy: "Momentum", value: 5000 },
    { strategy: "Value Investing", value: 7000 },
    { strategy: "Day Trading", value: -2000 },
    { strategy: "Options", value: 3000 },
  ],
};

const InvestmentBarChart = () => {
  const [selectedChart, setSelectedChart] = useState("Portfolio Growth");

  return (
    <Card sx={{ maxWidth: 700, mx: "auto", mt: 5, p: 3 }}>
      <CardContent>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom>
            Investment Performance Chart
          </Typography>
        </Box>

        {/* Chart Selection Dropdown */}
        <Box sx={{ mb: 3 }}>
          <FormControl fullWidth>
            <InputLabel sx={{ py: 2 }}>Select Chart</InputLabel>
            <Select
              value={selectedChart}
              onChange={(e) => setSelectedChart(e.target.value)}
            >
              {Object.keys(investmentData).map((key) => (
                <MenuItem key={key} value={key}>
                  {key}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        {/* Bar Chart */}
        <Box sx={{ py: 2 }}>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={investmentData[selectedChart]}>
              <XAxis
                dataKey={
                  selectedChart === "Portfolio Growth"
                    ? "month"
                    : selectedChart === "Asset Allocation"
                    ? "category"
                    : "strategy"
                }
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#3f51b5" />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default InvestmentBarChart;
