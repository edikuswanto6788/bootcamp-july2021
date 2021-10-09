import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  

class ListUser extends Component {
   
    render() {
        return (
            <Container>
                <>
                    
                    <h1>List User</h1>
                   
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

                    {/* <table>
                        <thead>
                            <tr>
                                <th>NO</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>City</th>
                                <th>Action</th>
                                    
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>edi</td>
                                <td>edi@gmail.com</td>
                                <td>Jakarta</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>edi</td>
                                <td>edi@gmail.com</td>
                                <td>Jakarta</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>edi</td>
                                <td>edi@gmail.com</td>
                                <td>Jakarta</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>edi</td>
                                <td>edi@gmail.com</td>
                                <td>Jakarta</td>
                            </tr>
                        </tbody>
                    </table> */}
                    
                    
                </>
                </Container>
           
        );
    }
}
export default ListUser;