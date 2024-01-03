import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Header from '../../components/Header';
import { mockDataOrders } from '../../data/mockData';

const columns = [
  { field: 'Order', headerName: 'Reference Order', width: 160, editable: true },
  { field: 'accountName', headerName: 'Account Name', width: 150, editable: true },
  { field: 'supplierName', headerName: 'Supplier', width: 150, editable: true },
  { field: 'productName', headerName: 'Commodity', width: 150, editable: true },
  { field: 'steamshipLine', headerName: 'Marine Line', width: 150, editable: true },
  { field: 'containerNumber', headerName: 'Container Number', width: 180, editable: true },
  { field: 'bookingNumber', headerName: 'Booking Number', width: 180, editable: true },
  {
    field: 'etd',
    headerName: 'ETD',
    width: 150,
    editable: true,
  },
  {
    field: 'eta',
    headerName: 'ETA',
    width: 150,
    editable: true,
    sortable: true,
  },
  { field: 'currentStatus', headerName: 'Status', width: 180, editable: true },
];

export default function DataGridDemo() {
  return (
    <Box sx={{ height: '100%', width: '100%', padding: '10px' }}>
      <Header
        title="Dashboard"
        subtitle="Shipment Status"
      />
      <div style={{ padding: '10px' }}>
        <DataGrid
          rows={mockDataOrders}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableRowSelectionOnClick
        />
      </div>     
    </Box>
  );
}
