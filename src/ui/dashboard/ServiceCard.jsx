import React, { Suspense, useContext, useState } from "react";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ServiceContext } from "../../ServiceContext/ServiceContextProvider";
import { updateService } from "../../ServiceContext/ActionCreator";
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

const ServiceCard = ({ title, img, id, handleDelete, price }) => {
  const { state, dispatch } = useContext(ServiceContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [editInputValue, setEditInputValue] = useState({
    title,
    image: img,
    id,
    price,
  });
  function handleUpdateService(e) {
    e.preventDefault();
    dispatch(updateService(editInputValue));
    handleClose();
    Swal.fire({
      title: "Updated Service!",
      text: "This service has been Successfully! Updated",
      icon: "success",
    });
    setEditInputValue({
      title,
      image: img,
      id,
      price,
    });
  }
  return (
    <div className="p-4 shadow-xl rounded-xl flex flex-col items-center justify-center">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit a Service
          </Typography>
          <form
            className="my-5 flex flex-col gap-4"
            onSubmit={handleUpdateService}
          >
            <TextField
              id="outlined-basic"
              label="Title of Service"
              variant="outlined"
              required
              value={editInputValue.title}
              onChange={(e) =>
                setEditInputValue({ ...editInputValue, title: e.target.value })
              }
            />
            <TextField
              id="outlined-basic"
              label="Price of Service"
              variant="outlined"
              required
              value={editInputValue.price}
              onChange={(e) =>
                setEditInputValue({ ...editInputValue, price: e.target.value })
              }
            />
            <TextField
              id="outlined-basic"
              label="Image"
              variant="outlined"
              required
              value={editInputValue.image}
              onChange={(e) =>
                setEditInputValue({ ...editInputValue, image: e.target.value })
              }
            />
            <Button type="submit" variant="contained">
              Update the service
            </Button>
          </form>
        </Box>
      </Modal>
      <Suspense
        fallback={
          <Stack spacing={1}>
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />

            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={210} height={60} />
            <Skeleton variant="rounded" width={210} height={60} />
          </Stack>
        }
      >
        <img src={img} alt={title} className="h-64 w-72 rounded-t-lg mb-5" />
      </Suspense>
      <Typography variant="h6">{title}</Typography>
      <p>Price: {price}</p>
      <div className="flex gap-3 my-5">
        <Button variant="contained" onClick={handleOpen}>
          Edit
        </Button>
        <Button variant="outlined" onClick={() => handleDelete(id)}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
