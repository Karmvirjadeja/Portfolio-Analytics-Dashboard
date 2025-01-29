import BreakdownChart from "@/components/BreakdownChart";
import FlexBetween from "@/components/FlexBetween";
import Header from "@/components/Header";
import OverviewChart from "@/components/OverviewChart";
import StatBox from "@/components/StatBox";
import {
  DownloadOutlined,
  Email,
  PointOfSale,
  PersonAdd,
  Traffic,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { DataGrid } from "@mui/x-data-grid";

function Dashboard() {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

  // Dummy data for the dashboard
  const data = {
    totalCustomers: 1200,
    todayStats: { totalSales: 1345 },
    thisMonthStats: { totalSales: 25432 },
    yearlySalesTotal: 304560,
    transactions: [
      {
        _id: "1",
        userId: "81100 00XXXX",
        createdAt: "2025-01-27",
        products: "Karmvir Jadeja",
        cost: 123.45,
      },
      {
        _id: "2",
        userId: "81100 00XXXX",
        createdAt: "2025-01-26",
        products: "Karmvir Jadeja",
        cost: 67.89,
      },
      {
        _id: "3",
        userId: "81100 00XXXX",
        createdAt: "2025-01-25",
        products: "Karmvir Jadeja",
        cost: 245.67,
      },
    ],
  };

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "userId",
      headerName: "Account No",
      flex: 1,
    },
    {
      field: "createdAt",
      headerName: "Date And Time",
      flex: 1,
    },
    {
      field: "products",
      headerName: "Account Holder",
      flex: 0.5,
      sortable: false,
      renderCell: (params) => params.value,
    },
    {
      field: "cost",
      headerName: "Balance",
      flex: 1,
      renderCell: (params) => `₹${Number(params.value).toFixed(2)}`,
    },
  ];

  if (!data)
    return (
      <Box
        width="100%"
        height="100%"
        minHeight="80vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress color="secondary" />
      </Box>
    );

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="Karmvir Jadeja" subtitle="Current Returns" />

        <Box>
          <Button
            sx={{
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.background.alt,
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              "&:hover": {
                backgroundColor: theme.palette.secondary.light,
              },
            }}
          >
            <DownloadOutlined sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </FlexBetween>

      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        <StatBox
          title="Total Portfolio Value"
          value={data.totalCustomers}
          increase="+14% 24h"
          icon={
            <Email
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <StatBox
          title="Current Returns"
          value={data.todayStats.totalSales}
          increase="+21% till date"
          icon={
            <PointOfSale
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
        >
          <OverviewChart view="sales" isDashboard={true} />
        </Box>
        <StatBox
          title="Bank Balance"
          value={data.thisMonthStats.totalSales}
          icon={
            <PersonAdd
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <StatBox
          title="Total Invested Amount "
          value={data.yearlySalesTotal}
          icon={
            <Traffic
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />

        <Box
          gridColumn="span 7"
          gridRow="span 3"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
              borderRadius: "5rem",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: theme.palette.background.alt,
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderTop: "none",
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${theme.palette.secondary[200]} !important`,
            },
          }}
        >
          <DataGrid
            getRowId={(row) => row._id}
            rows={data.transactions}
            columns={columns}
          />
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 3"
          backgroundColor={theme.palette.background.alt}
          p="1.5rem"
          borderRadius="0.55rem"
        >
          <Typography variant="h3" sx={{ color: theme.palette.secondary[100] }}>
            Investments
          </Typography>
          <BreakdownChart isDashboard={true} />
          <Typography
            p="0 0.6rem"
            fontSize="1.0rem"
            sx={{ color: theme.palette.secondary[200] }}
          >
            Breakdown of Total Shares/Coins.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
