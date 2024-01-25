import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
// import { Select } from '@mui/base/Select';
import { Option } from '@mui/base/Option';
import { Select } from 'antd';


const renderDetailsButton = (params) => {
      
        const handleChange = (value) => {
        console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
        };
    return (
        <strong>

            <Select
                labelInValue
                defaultValue={{
                value: 'lucy',
                label: 'Lucy (101)',
                }}
                style={{
                width: 120,
                }}
                onChange={handleChange}
                options={[
                {
                    value: 'jack',
                    label: 'Jack (100)',
                },
                {
                    value: 'lucy',
                    label: 'Lucy (101)',
                },
                ]}
            />
            
        </strong>
    )
}
const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
        field: 'col5',
        headerName: 'Name 5',
        width: 150,
        
        disableClickEventBubbling: true,
    },
    {
        field: 'col6',
        headerName: 'Name 6',
        width: 250,
        height: 250,
        renderCell: renderDetailsButton,
        disableClickEventBubbling: true,
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


const DataTable = () => {
    return (
        <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
            pagination: {
                paginationModel: {
                pageSize: 5,
                },
            },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
            
        />
        
        </Box>
    );
};

export default DataTable;