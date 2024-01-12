import {
  Box,
  Button,
  Modal,
  TableCell,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import React, { useContext, useState } from "react";
import { ServiceContext } from "../../ServiceContext/ServiceContextProvider";
import { editClient } from "../../ServiceContext/ActionCreator";
import Swal from "sweetalert2";
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
const ClientTable = ({ row, handleDelteClient }) => {
  const [open, setOpen] = React.useState(false);
  const { state, dispatch } = useContext(ServiceContext);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [editInputValue, setEditInputValue] = useState({
    title: row.title,
    id: row.id,
    budget: row.budget,
    billingType: row.billingType,
  });
  function handleUpdateClient(e) {
    e.preventDefault();
    console.log(editInputValue);
    dispatch(editClient(editInputValue));
    handleClose();
    Swal.fire({
      title: "Updated Service!",
      text: "This service has been Successfully! Updated",
      icon: "success",
    });
  }
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit a Client Details
          </Typography>
          <form
            className="my-5 flex flex-col gap-4"
            onSubmit={handleUpdateClient}
          >
            <TextField
              id="outlined-basic"
              label="Title of Client"
              variant="outlined"
              required
              value={editInputValue.title}
              onChange={(e) =>
                setEditInputValue({ ...editInputValue, title: e.target.value })
              }
            />
            <TextField
              id="outlined-basic"
              label="Budget of Client"
              variant="outlined"
              required
              value={editInputValue.budget}
              onChange={(e) =>
                setEditInputValue({ ...editInputValue, budget: e.target.value })
              }
            />

            <Button type="submit" variant="contained">
              Update the Client
            </Button>
          </form>
        </Box>
      </Modal>
      <TableCell component="th" scope="row">
        {row.id}
      </TableCell>
      <TableCell component="th" scope="row">
        {row.title}
      </TableCell>
      <TableCell align="right">{row.budget}</TableCell>
      <TableCell align="right">{row.billingType}</TableCell>
      <TableCell align="right">
        <EditIcon className="cursor-pointer" onClick={handleOpen} />
      </TableCell>
      <TableCell align="right" className="cursor-pointer">
        <DeleteIcon
          className="cursor-pointer"
          onClick={() => handleDelteClient(row.title)}
        />
      </TableCell>
    </TableRow>
  );
};

export default ClientTable;
