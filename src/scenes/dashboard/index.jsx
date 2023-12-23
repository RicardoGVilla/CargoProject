import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
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
    type: 'date',
    width: 150,
    editable: true,
  },
  {
    field: 'eta',
    headerName: 'ETA',
    type: 'date',
    width: 150,
    editable: true,
    sortable: true,
  },
];

const rows = [
    { id: 1, Order: "5023-123K", productName: "Coffee Beans", supplierName: "Global Grains", accountName: 'IPB', steamshipLine: "Maersk", containerNumber: 'CNU2134567', bookingNumber: 'BK1001', etd: new Date('2023-07-01'), eta: new Date('2023-07-15') },
    { id: 2, Order: "5023-75K",productName: "Tea Leaves", supplierName: "Herbal Harvest", accountName: 'Portflex', steamshipLine: "COSCO", containerNumber: 'CNU2234557', bookingNumber: 'BK1002', etd: new Date('2023-07-03'), eta: new Date('2023-07-18') },
    { id: 3, Order: "5023-63K",productName: "Quinoa", supplierName: "Andean Foods", accountName: 'Oceanic', steamshipLine: "MSC", containerNumber: 'CNU2334589', bookingNumber: 'BK1003', etd: new Date('2023-07-05'), eta: new Date('2023-07-20') },
    { id: 4, Order: "5023-83K",productName: "Cacao Powder", supplierName: "Tropical Treats", accountName: 'Atlas Corp', steamshipLine: "Evergreen", containerNumber: 'CNU2434547', bookingNumber: 'BK1004', etd: new Date('2023-07-08'), eta: new Date('2023-07-22') },
    { id: 5, Order: "5023-173K",productName: "Spices", supplierName: "Spice Island", accountName: 'Neptune Goods', steamshipLine: "OOCL", containerNumber: 'CNU2534599', bookingNumber: 'BK1005', etd: new Date('2023-07-10'), eta: new Date('2023-07-24') },
    { id: 6, Order: "5023-183K",productName: "Olive Oil", supplierName: "Mediterraneo", accountName: 'Zeus Lines', steamshipLine: "Hapag-Lloyd", containerNumber: 'CNU2634500', bookingNumber: 'BK1006', etd: new Date('2023-07-12'), eta: new Date('2023-07-26') },
    { id: 7, Order: "5023-163K",productName: "Avocado", supplierName: "Green Orchard", accountName: 'Athena Traders', steamshipLine: "Yang Ming", containerNumber: 'CNU2734511', bookingNumber: 'BK1007', etd: new Date('2023-07-15'), eta: new Date('2023-07-29') },
    { id: 8, Order: "5023-13K",productName: "Blueberries", supplierName: "Berry Farm", accountName: 'Chronos Freight', steamshipLine: "APL", containerNumber: 'CNU2834522', bookingNumber: 'BK1008', etd: new Date('2023-07-18'), eta: new Date('2023-08-01') },
    { id: 9, Order: "5023-113K",productName: "Organic Honey", supplierName: "Sweet Fields", accountName: 'Poseidon Waves', steamshipLine: "ZIM", containerNumber: 'CNU2934533', bookingNumber: 'BK1009', etd: new Date('2023-07-20'), eta: new Date('2023-08-03') },
    { id: 10, Order: "5023-153K",productName: "Wine", supplierName: "Vineyard Vines", accountName: 'Hermes Logistics', steamshipLine: "PIL", containerNumber: 'CNU3034544', bookingNumber: 'BK1010', etd: new Date('2023-07-22'), eta: new Date('2023-08-05') }
  ];
  

export default function DataGridDemo() {
  return (
    <Box sx={{ height: '100%', width: '100%', padding: '10px' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          sorting: {
            sortModel: [{ field: 'eta', sort: 'asc' }],
          },
        }}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}
