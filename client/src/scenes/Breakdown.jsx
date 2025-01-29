import BreakdownChart from "@/components/BreakdownChart";
import Header from "@/components/Header";
import { Box } from "@mui/material";

function Breakdown() {
  // Dummy data
  const dummyData = [
    {
      id: "Bitcoin",
      label: "Bitcoin",
      value: 400,
      color: "hsl(220, 70%, 50%)",
    },
    {
      id: "XRP",
      label: "XRP",
      value: 300,
      color: "hsl(340, 70%, 50%)",
    },
    {
      id: "Dogecoin",
      label: "Dogecoin",
      value: 200,
      color: "hsl(120, 70%, 50%)",
    },
    { id: "Books", label: "Books", value: 150, color: "hsl(45, 70%, 50%)" },
    { id: "Others", label: "Others", value: 100, color: "hsl(180, 70%, 50%)" },
  ];

  return (
    <Box height="100%" maxHeight="85vh" m="1.5rem 2.5rem">
      <Header title="BREAKDOWN" subtitle="Breakdown of Sales By Category" />
      <Box mt="40px" height="72vh">
        <BreakdownChart data={dummyData} />
      </Box>
    </Box>
  );
}

export default Breakdown;
