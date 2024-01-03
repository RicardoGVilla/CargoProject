import React from 'react';
import { Box, Typography } from "@mui/material";
import Header from '../../components/Header';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DataGrid } from '@mui/x-data-grid';
import { monthlyData } from '../../data/mockData';

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
  const columnsFirstGrid = [
    { field: 'orderNumber', headerName: 'Order Number', width: 120 },
    { field: 'product', headerName: 'Product', width: 150 },
    { field: 'purchasePrice', headerName: 'Purchase Price', width: 130 },
    { field: 'incoterm', headerName: 'Incoterm', width: 130 },
  ];

  const rowsFirstGrid = [
    { id: 1, orderNumber: 'ORD001', product: 'Wheat', purchasePrice: 250, incoterm: 'FOB' },
    { id: 2, orderNumber: 'ORD002', product: 'Corn', purchasePrice: 220, incoterm: 'CIF' },
    { id: 3, orderNumber: 'ORD003', product: 'Rice', purchasePrice: 280, incoterm: 'DDP' },
    { id: 4, orderNumber: 'ORD004', product: 'Soybeans', purchasePrice: 300, incoterm: 'FOB' },
    { id: 5, orderNumber: 'ORD005', product: 'Potatoes', purchasePrice: 150, incoterm: 'CIF' },
  ];

  const columnsSecondGrid = [
    { field: 'orderNumber', headerName: 'Order Number', width: 120 },
    { field: 'product', headerName: 'Product', width: 150 },
    { field: 'profitPerContainer', headerName: 'Profit', width: 130 },
    { field: 'dateOfPurchase', headerName: 'Date of Purchase', width: 130 },
  ];

  const rowsSecondGrid = [
    { id: 6, orderNumber: 'ORD006', product: 'Apples', profitPerContainer: 200, dateOfPurchase: '2023-10-10' },
    { id: 7, orderNumber: 'ORD007', product: 'Oranges', profitPerContainer: 180, dateOfPurchase: '2023-11-20' },
    { id: 8, orderNumber: 'ORD008', product: 'Grapes', profitPerContainer: 220, dateOfPurchase: '2023-12-15' },
    { id: 9, orderNumber: 'ORD009', product: 'Tomatoes', profitPerContainer: 190, dateOfPurchase: '2023-12-25' },
    { id: 10, orderNumber: 'ORD010', product: 'Carrots', profitPerContainer: 170, dateOfPurchase: '2023-12-31' },
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
