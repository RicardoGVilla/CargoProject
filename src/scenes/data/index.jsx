import React from 'react';
import { Box } from "@mui/material";
import Header from '../../components/Header';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';


const containerStyles = {
//   backgroundColor: 'blue',
  padding: '10px',
//   border: '1px solid black',
  border: 'none',
  height: '50%',
  marginBottom: '20px',
};

const graphContainer = {
//   backgroundColor: 'blue',
  padding: '10px',
//   border: '1px solid black',
  border: 'none',
  height: '80vh',
  width: '70%',
  margin:'10px',
};

export default function Data() {
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];


      const columns: GridColDef[] = [
        { field: 'id', headerName: 'Order', width: 90 ,
        flex: 1,},
        {
          field: 'firstName',
          headerName: 'Product',
          flex: 1,
          editable: true,
        },
        {
          field: 'lastName',
          headerName: 'Status',
          flex: 1,
          editable: true,
        },
        {
          field: 'age',
          headerName: 'Price',
          type: 'number',
          flex: 1, 
          editable: true,
        },
      ];
      
      
      const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      ];

  return (
    <Box
      sx={{
        // bgcolor: "red",
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
        <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
        </div>
        <Box
          sx={{
            // bgcolor: "green",
            width: '30%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={containerStyles}>
          <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 4,
            },
          },
        }}
        pageSizeOptions={[4]}
        disableRowSelectionOnClick
      />
    </Box>
          </div>
          <div style={containerStyles}>
          <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 4,
            },
          },
        }}
        pageSizeOptions={[4]}
        disableRowSelectionOnClick
      />
    </Box>
          </div>
        </Box>
      </Box>
    </Box>
  );
}
