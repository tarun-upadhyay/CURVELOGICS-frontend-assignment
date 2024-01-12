import React, { useContext, useState } from "react";
import { ServiceContext } from "../../../ServiceContext/ServiceContextProvider";
import ServiceCard from "../../../ui/dashboard/ServiceCard";
import Grid from "@mui/material/Grid";
import Swal from "sweetalert2";
import {
  addNewService,
  serviceDeleted,
} from "../../../ServiceContext/ActionCreator";
import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
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

const Service = () => {
  const { state, dispatch } = useContext(ServiceContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [newInputVal, setNewInputVal] = useState({
    title: "",
    price: "",
    image: "",
  });
  const handleDelete = (id) => {
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
        dispatch(serviceDeleted(id));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  function handleNewSubmit(e) {
    e.preventDefault();
    dispatch(addNewService(newInputVal));
    handleClose();
    Swal.fire({
      title: "Added New Service!",
      text: "New Service is added Successfully!",
      icon: "success",
    });
    setNewInputVal({
      title: "",
      price: "",
      image: "",
    });
  }
  return (
    <main className="mt-2 w-full p-5">
      <div className="flex w-full flex-row justify-between items-center">
        <h1 className={`mb-4 text-4xl font-mono font-bold md:text-2xl px-5`}>
          Services
        </h1>
        <Button variant="contained" onClick={handleOpen}>
          Add New Service
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Add new service
            </Typography>
            <form
              className="my-5 flex flex-col gap-4"
              onSubmit={handleNewSubmit}
            >
              <TextField
                id="outlined-basic"
                label="Title of Service"
                variant="outlined"
                required
                value={newInputVal.title}
                onChange={(e) =>
                  setNewInputVal({ ...newInputVal, title: e.target.value })
                }
              />
              <TextField
                id="outlined-basic"
                label="Price of Service"
                variant="outlined"
                required
                value={newInputVal.price}
                onChange={(e) =>
                  setNewInputVal({ ...newInputVal, price: e.target.value })
                }
              />
              <TextField
                id="outlined-basic"
                label="Image"
                variant="outlined"
                required
                value={newInputVal.image}
                onChange={(e) =>
                  setNewInputVal({ ...newInputVal, image: e.target.value })
                }
              />
              <Button type="submit" variant="contained">
                Add New Service
              </Button>
            </form>
          </Box>
        </Modal>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {state.data.length > 0 &&
          state.data.map(({ id, title, image, price }, i) => {
            return (
              <ServiceCard
                handleDelete={handleDelete}
                key={i}
                title={title}
                img={image}
                id={id}
                price={price}
              />
            );
          })}
      </div>
    </main>
  );
};

export default Service;
