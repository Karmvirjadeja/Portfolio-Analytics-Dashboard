import Header from "@/components/Header";
import { Box, useTheme, CircularProgress } from "@mui/material";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoData } from "@/state/geoData";

// Dummy data for plotting
const dummyData = [
  { id: "AFG", value: 30 },
  { id: "AGO", value: 40 },
  { id: "ALB", value: 50 },
  { id: "ARE", value: 60 },
  { id: "ARG", value: 70 },
  { id: "ARM", value: 80 },
  { id: "AUS", value: 90 },
  { id: "AUT", value: 100 },
  { id: "AZE", value: 110 },
];

function Geography() {
  const theme = useTheme();

  return (
    <Box height="100%" maxHeight="85vh" m="1.5rem 2.5rem">
      <Header title="GEOGRAPHY" subtitle="Find where your users are located." />
      <Box
        mt="40px"
        height="72vh"
        border={`1px solid ${theme.palette.secondary[200]}`}
        borderRadius="4px"
      >
        <ResponsiveChoropleth
          data={dummyData}
          colors="nivo"
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
          features={geoData.features}
          margin={{ top: 0, right: 0, bottom: 0, left: -50 }}
          domain={[0, 120]}
          unknownColor="#666666"
          label="properties.name"
          valueFormat=".2s"
          projectionScale={150}
          projectionTranslation={[0.45, 0.6]}
          projectionRotation={[0, 0, 0]}
          borderWidth={1.3}
          borderColor="#ffffff"
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              justify: true,
              translateX: 0,
              translateY: -125,
              itemsSpacing: 0,
              itemWidth: 94,
              itemHeight: 18,
              itemDirection: "left-to-right",
              itemTextColor: theme.palette.secondary[200],
              itemOpacity: 0.85,
              symbolSize: 18,
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: theme.palette.background.alt,
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

export default Geography;
