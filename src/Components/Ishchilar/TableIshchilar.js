import React, { useState } from "react";
import {
  TableRow,
  TablePagination,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Paper,
  Button,
  Avatar,
} from "@mui/material";
import { purple } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Modal } from "react-bootstrap";
import style from "./Table.module.css";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: "#11cb5f",
    },
    danger: {
      main: "#f00",
      contrastText: "#fff",
    },
  },
});

export default function StickyHeadTable({ rows }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(rows[1]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleOpen = (row) => {
    setModal(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <h1 className={style.tableheader}>
        <Button variant="contained" color="primary">
          Add
        </Button>
      </h1>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead center="true">
              <TableRow>
                <TableCell align="center">Rasm</TableCell>
                <TableCell align="center">Familyasi</TableCell>
                <TableCell align="center">Ismi</TableCell>
                <TableCell align="center">Ish haqqi</TableCell>
                <TableCell align="center">Ish boshlagan vaqti</TableCell>
                <TableCell align="center">To'liq ma'lumot</TableCell>
                <TableCell align="center">O'zgartirish</TableCell>
                <TableCell align="center">O'chirish</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow key={row.id}>
                    <Modal show={open} onClose={handleClose}>
                      <Modal.Header>
                        <Modal.Title>{modal.person.name}</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <div>
                          <b>Familya: </b>
                          {modal.person.familya}
                        </div>
                        <div>
                          <b>Ism: </b>
                          {modal.person.name}
                        </div>
                        <div>
                          <b>pasport number: </b>
                          {modal.person.pasportserya}
                        </div>
                        <div>
                          <b>Yashash manzili: </b>
                          <ul>
                            <li>
                              <b>Viloyat: </b>
                              {modal.person.yashash.viloyat}
                            </li>
                            <li>
                              <b>Tuman: </b>
                              {modal.person.yashash.tuman}
                            </li>
                            <li>
                              <b>Mahalla: </b>
                              {modal.person.yashash.mahalla}
                            </li>
                            <li>
                              <b>Uy: </b>
                              {modal.person.yashash.uy}
                            </li>
                          </ul>
                        </div>
                        <div>
                          <b>Telephoe: </b>
                          {modal.person.tel}
                        </div>
                        <div>
                          <b>Tug'ligan sana: </b>
                          {modal.person.brath}
                        </div>
                        <div>
                          <b>Oyligi: </b>
                          {modal.oyligi}
                        </div>
                        <div>
                          <b>Kasbi: </b>
                          {modal.kasbi}
                        </div>
                        <div>
                          <b>Ish boshlagan vaqti: </b>
                          {modal.ishga_kelgan_vaqti}
                        </div>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button onClick={handleClose} color="error">
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                    <TableCell
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Avatar
                        alt="Remy Sharp"
                        src={`${row.image}`}
                        sx={{ width: 56, height: 56 }}
                      />
                    </TableCell>
                    <TableCell align="center">{row.person.familya}</TableCell>
                    <TableCell align="center">{row.person.name}</TableCell>
                    <TableCell align="center">{row.oyligi}</TableCell>
                    <TableCell align="center">
                      {row.ishga_kelgan_vaqti}
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        onClick={() => handleOpen(row)}
                        size="small"
                        variant="contained"
                        color="info"
                      >
                        Info
                      </Button>
                    </TableCell>
                    <TableCell align="center">
                      <Button size="small" variant="contained" color="primary">
                        Edit
                      </Button>
                    </TableCell>
                    <TableCell align="center">
                      <ThemeProvider theme={theme}>
                        <Button size="small" variant="contained" color="danger">
                          Delete
                        </Button>
                      </ThemeProvider>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
