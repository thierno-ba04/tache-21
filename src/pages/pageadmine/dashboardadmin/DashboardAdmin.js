import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import "./dashboardadmin.css"
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { Button, Col, Container, Row } from 'react-bootstrap';
// import { BarChart, Line } from 'react-bootstrap-icons';
// import { Bar, CartesianGrid, Legend, LineChart, Rectangle, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { FaDownload } from 'react-icons/fa';

function DashboardAdmin() {

  const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 100,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 100,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 100,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 150,
      valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
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
    { id: 10, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },

  ];

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className='main'>
      <Container>
        <Row>
        <Col lg={4} md={4} >
      <div  className='main-card'>
      <h6>Année Scolaire 2020/2021</h6>
        <div className='div_mer'>
        <div className="div-1">
        <h5>Eléves</h5>
        <p>Liste de tous les éléves</p>
        <h1>5789</h1>
        <span className="icones-perso">
          <MdOutlineSupervisorAccount size={50} />
        </span>
        </div>
        <div className='border'></div>
        <div className="div-2">
        <h2>5680</h2>
        <p>Liste des inscrit</p>
        <span1>$ 1500.50</span1>
        <p>Somme inscription</p>
        <span2>$ 350.60</span2>
        <p>recouvrement</p>
        </div>
        </div>
      </div>
      </Col>
      <Col lg={4} md={4}>
        <div className='main-card2'>
        <h5>Professeurs</h5>
        <p>Liste des professeurs</p>
        <h4>50</h4>
        <span className="icones-perso2">
          <MdOutlineSupervisorAccount size={55} />
        </span>
        </div>
      </Col>
      <Col lg={4} md={4}>
        <div className='main-card2'>
        <h5>Personnels</h5>
        <p>Liste des personnels</p>
        <h4>15</h4>
        <span className="icones-perso2">
          <MdOutlineSupervisorAccount size={55} />
        </span>
        </div>
      </Col>
        </Row>
        <Row>
        <div className="charts">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
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
            <Bar
              dataKey="pv"
              fill="#8884d8"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
            <Bar
              dataKey="uv"
              fill="#82ca9d"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
          </BarChart>
        </ResponsiveContainer>

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
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
        </Row>
        <Row>
          <h6 className='lsteleves'>Liste des éléves</h6>
          <Col md={6} className="mt-3">
            <div className="buttexport">
                <Button><FaDownload className="me-2 mb-1" />
                    Export to csv</Button>
                  </div>
          </Col>
          <Col md={6}>
          <style name="TextAppearance.App.Button" parent="TextAppearance.MaterialComponents.Button">
    <item name="fontFamily">@font/rubik</item>
    <item name="android:fontFamily">@font/rubik</item>
</style>
          </Col>
        </Row>
  <Row className='dashboardtab'>
       <Box sx={{ height: 400, width: '70%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    </Row>
    </Container>

    </div>
  )
}

export default DashboardAdmin
