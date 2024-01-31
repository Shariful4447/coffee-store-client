import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
// import { Select } from '@mui/base/Select';
import { Option } from '@mui/base/Option';
import { Select } from 'antd';
import { useState, useEffect } from 'react'


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
    
        { 
        field: 'id', 
        headerName: 'ID', 
        width: 90,
        
    },

    
    {
      field: 'email',
      headerName: 'Email',
      width: 150,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
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
    { id: 1, fullName: 'Snow', email: 'Jon', age: 14 },
    
  ];


const DataTable = () => {
    const [tableData, setTableData] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/user")
          .then((data) => data.json())
          .then((data) => setTableData(data))

    
      }, [])
    console.log(tableData);

    return (
        <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
            getRowId={(row) => row._id}
            rows={tableData}
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