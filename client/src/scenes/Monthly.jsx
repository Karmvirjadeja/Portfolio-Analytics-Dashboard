import { useMemo } from "react";
import { Box, useTheme, CircularProgress } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import Header from "@/components/Header";

function Monthly() {
  const theme = useTheme();

  // Dummy data
  const data = {
    monthlyData: [
      { month: "January", totalSales: 5000, totalUnits: 300 },
      { month: "February", totalSales: 4000, totalUnits: 250 },
      { month: "March", totalSales: 6000, totalUnits: 350 },
      { month: "April", totalSales: 7000, totalUnits: 400 },
      { month: "May", totalSales: 8000, totalUnits: 450 },
      { month: "June", totalSales: 7500, totalUnits: 420 },
      { month: "July", totalSales: 8500, totalUnits: 460 },
      { month: "August", totalSales: 9000, totalUnits: 480 },
      { month: "September", totalSales: 7200, totalUnits: 410 },
      { month: "October", totalSales: 6800, totalUnits: 380 },
      { month: "November", totalSales: 7400, totalUnits: 400 },
      { month: "December", totalSales: 7800, totalUnits: 420 },
    ],
  };

  const [formattedData] = useMemo(() => {
    const { monthlyData } = data;
    const totalSalesLine = {
      id: "Share's",
      color: theme.palette.secondary.main,
      data: [],
    };
    const totalUnitsLine = {
      id: "Crypto",
      color: theme.palette.secondary[600],
      data: [],
    };

    monthlyData.forEach(({ month, totalSales, totalUnits }) => {
      totalSalesLine.data = [
        ...totalSalesLine.data,
        { x: month, y: totalSales },
      ];
      totalUnitsLine.data = [
        ...totalUnitsLine.data,
        { x: month, y: totalUnits },
      ];
    });

    const formattedData = [totalSalesLine, totalUnitsLine];
    return [formattedData];
  }, [data, theme]);

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="MONTHLY SALES" subtitle="Chart of monthly sales" />
      <Box height="75vh">
        <ResponsiveLine
          data={formattedData}
          theme={{
            axis: {
              domain: {
                line: {
                  stroke: theme.palette.secondary[200],
                },
              },
              legend: {
                text: {
                  fill: theme.palette.secondary[200],
                },
              },
              ticks: {
                line: {
                  stroke: theme.palette.secondary[200],
                  strokeWidth: 1,
                },
                text: {
                  fill: theme.palette.secondary[200],
                },
              },
            },
            legends: {
              text: {
                fill: theme.palette.secondary[200],
              },
            },
            tooltip: {
              container: {
                color: theme.palette.grey[700],
              },
            },
          }}
          colors={{ datum: "color" }}
          margin={{ top: 50, right: 50, bottom: 70, left: 60 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: false,
            reverse: false,
          }}
          yFormat=" >-.2f"
          curve="catmullRom"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 90,
            legend: "Month",
            legendOffset: 60,
            legendPosition: "middle",
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Total",
            legendOffset: -50,
            legendPosition: "middle",
          }}
          enableGridX={false}
          enableGridY={false}
          pointSize={10}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: "top-right",
              direction: "column",
              justify: false,
              translateX: 50,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </Box>
    </Box>
  );
}

export default Monthly;
