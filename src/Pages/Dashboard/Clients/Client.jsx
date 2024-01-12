import {
  Box,
  Button,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";

import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Paper from "@mui/material/Paper";
import { ServiceContext } from "../../../ServiceContext/ServiceContextProvider";
import Swal from "sweetalert2";
import {
  addNewClient,
  deleteClient,
} from "../../../ServiceContext/ActionCreator";
import ClientTable from "../../../ui/dashboard/ClientTable";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Client = () => {
  const { state, dispatch } = useContext(ServiceContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [newInputVal, setNewInputVal] = useState({
    title: "",
    budget: "",
    billingType: "Cash",
  });
  function handleNewSubmit(e) {
    e.preventDefault();
    console.log(newInputVal);
    dispatch(addNewClient(newInputVal));
    handleClose();
    Swal.fire({
      title: "Added New Service!",
      text: "New Service is added Successfully!",
      icon: "success",
    });
    setNewInputVal({
      title: "",
      budget: "",
      billingType: "Cash",
    });
  }
  function handleDelteClient(title) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteClient(title));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  }
  return (
    <main className="mt-2 w-full p-5">
      <div className="flex w-full flex-row justify-between items-center">
        <h1 className={`mb-4 text-4xl font-mono font-bold md:text-2xl px-5`}>
          Clients
        </h1>
        <Button variant="contained" onClick={handleOpen}>
          Add New Client
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Add new client
            </Typography>
            <form
              className="my-5 flex flex-col gap-4"
              onSubmit={handleNewSubmit}
            >
              <TextField
                id="outlined-basic"
                label="Title of Client"
                variant="outlined"
                required
                value={newInputVal.title}
                onChange={(e) =>
                  setNewInputVal({ ...newInputVal, title: e.target.value })
                }
              />
              <TextField
                id="outlined-basic"
                label="Budget of Client"
                variant="outlined"
                required
                value={newInputVal.budget}
                onChange={(e) =>
                  setNewInputVal({ ...newInputVal, budget: e.target.value })
                }
              />

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={newInputVal.billingType}
                label="Billing Type"
                onChange={(e) =>
                  setNewInputVal({
                    ...newInputVal,
                    billingType: e.target.value,
                  })
                }
              >
                <MenuItem value={"Cash"}>Cash</MenuItem>
                <MenuItem value={"Credit Card"}>Credit Card</MenuItem>
                <MenuItem value={"Auto-Debit"}>Auto Debit</MenuItem>
              </Select>
              <Button type="submit" variant="contained">
                Add New Client
              </Button>
            </form>
          </Box>
        </Modal>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Client Id</TableCell>
              <TableCell>Client Title</TableCell>
              <TableCell align="right">Budget</TableCell>
              <TableCell align="right">Billing Type</TableCell>
              <TableCell align="right">Edit</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.clients.map((row, i) => {
              return (
                <ClientTable
                  key={i}
                  row={row}
                  handleDelteClient={handleDelteClient}
                />
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </main>
  );
};

export default Client;
