import React from 'react';
import { Box, Typography } from "@mui/material";
import Header from '../../components/Header';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const containerStyles = {
  padding: '10px',
  border: 'none',
  height: '50%',
  marginBottom: '20px',
};

const graphContainer = {
  padding: '10px',
  border: 'none',
  height: '80vh',
  width: '70%',
  margin: '10px',
};

export default function Data() {
  const monthlyData = [
    { month: 'January', expenses: 2000, revenue: 4000 },
    { month: 'February', expenses: 2500, revenue: 3500 },
    { month: 'March', expenses: 1800, revenue: 4200 },
    { month: 'April', expenses: 2200, revenue: 3800 },
    { month: 'May', expenses: 1900, revenue: 4500 },
    { month: 'June', expenses: 2100, revenue: 4200 },
    { month: 'July', expenses: 2300, revenue: 4300 },
    { month: 'August', expenses: 2400, revenue: 4800 },
    { month: 'September', expenses: 2000, revenue: 4000 },
    { month: 'October', expenses: 2500, revenue: 3500 },
    { month: 'November', expenses: 1800, revenue: 4200 },
    { month: 'December', expenses: 2200, revenue: 3800 },
  ];

  const columnsFirstGrid: GridColDef[] = [
    { field: 'orderNumber', headerName: 'Order Number', width: 120 },
    { field: 'product', headerName: 'Product', width: 150 },
    { field: 'purchasePrice', headerName: 'Purchase Price', width: 130 },
    { field: 'incoterm', headerName: 'Incoterm', width: 130 },
  ];

  const rowsFirstGrid = [
    { id: 1, orderNumber: 'ORD001', product: 'Avocado', purchasePrice: 1.99, incoterm: 'FOB' },
    { id: 2, orderNumber: 'ORD002', product: 'Pineapple', purchasePrice: 2.49, incoterm: 'CIF' },
    { id: 3, orderNumber: 'ORD003', product: 'Bananas', purchasePrice: 0.99, incoterm: 'DDP' },
    { id: 4, orderNumber: 'ORD004', product: 'Chocolate', purchasePrice: 3.79, incoterm: 'FOB' },
    { id: 5, orderNumber: 'ORD005', product: 'Rice', purchasePrice: 1.29, incoterm: 'CIF' },
  ];

  const columnsSecondGrid: GridColDef[] = [
    { field: 'orderNumber', headerName: 'Order Number', width: 120 },
    { field: 'product', headerName: 'Product', width: 150 },
    { field: 'profitPerContainer', headerName: 'Profit', width: 130 },
    { field: 'dateOfPurchase', headerName: 'Date of Purchase', width: 130 },
  ];

  const rowsSecondGrid = [
    { id: 6, orderNumber: 'ORD006', product: 'Coffee Beans', profitPerContainer: 500, dateOfPurchase: '2023-01-10' },
    { id: 7, orderNumber: 'ORD007', product: 'Olive Oil', profitPerContainer: 800, dateOfPurchase: '2023-02-20' },
    { id: 8, orderNumber: 'ORD008', product: 'Spices', profitPerContainer: 300, dateOfPurchase: '2023-03-15' },
    { id: 9, orderNumber: 'ORD009', product: 'Canned Tuna', profitPerContainer: 600, dateOfPurchase: '2023-04-05' },
    { id: 10, orderNumber: 'ORD010', product: 'Cheese', profitPerContainer: 700, dateOfPurchase: '2023-05-12' },
  ];

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header title="Data Analysis" />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          height: '100%',
        }}
      >
        <div style={graphContainer}>
          <Typography variant="h6" align="center">Monthly Expenses vs. Revenue</Typography>
          <ResponsiveContainer width="100%" height="80%">
            <LineChart
              data={monthlyData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="expenses" name="Expenses" stroke="#FF5733" />
              <Line type="monotone" dataKey="revenue" name="Revenue" stroke="#33FF57" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <Box
          sx={{
            width: '30%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={containerStyles}>
            <Box sx={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={rowsFirstGrid}
                columns={columnsFirstGrid}
                pageSize={5}
                rowsPerPageOptions={[5]}
              />
            </Box>
          </div>
          <div style={containerStyles}>
            <Box sx={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={rowsSecondGrid}
                columns={columnsSecondGrid}
                pageSize={5}
                rowsPerPageOptions={[5]}
              />
            </Box>
          </div>
        </Box>
      </Box>
    </Box>
  );
}
