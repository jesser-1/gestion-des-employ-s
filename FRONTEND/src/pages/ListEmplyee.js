import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MySideNav from '../components/MySideNav';
import { useSelector } from "react-redux";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(id, nom, prenom,age , email,position) {
  return { id, nom, prenom, age, email,position, };
}

const rows = [
  createData('1', 'jesser', 'Ben Mefteh', 26,'Benmeftehjesser@gmail.com','développeur web'),
  
];

export default function ListEmployee() {
    const state = useSelector((state) => state.employe.value);
  return (
    <div className="page"><MySideNav/>
    <h1>List Des Employées</h1>
    <TableContainer component={Paper}>
      <Table sx={{
          width: "60%",
          marginTop: "30px",
          marginLeft: "20%",
          fontSize: "4rem",
        }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>id</StyledTableCell>
            <StyledTableCell align="right">Nom</StyledTableCell>
            <StyledTableCell align="right">Prenom</StyledTableCell>
            <StyledTableCell align="right">Age</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Position</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="right">{row.nom}</StyledTableCell>
              <StyledTableCell align="right">{row.prenom}</StyledTableCell>
              <StyledTableCell align="right">{row.age}</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.position}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}