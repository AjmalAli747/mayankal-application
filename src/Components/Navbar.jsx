import React, { useState } from "react";
import "../App.css";
import { Box, Button, Typography, Modal } from "@mui/material";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassowrd, setUserPassowrd] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const submitData = (e) => {
    e?.preventDefault();
    if (userName === "") {
      toast("Enter User Name");
    } else if (userEmail === "") {
      toast("Enter User Email");
    } else if (userPassowrd === "") {
      toast("Enter User Email");
    } else if (userNumber === "") {
      toast("Enter User Email");
    } else if (userMessage === "") {
      toast("Enter User Email");
    } else {
 
      console.log(userName, userEmail, userPassowrd, userNumber, userMessage);
      handleClose(false);
    }
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar_flex">
          <h1>
            <a href="#">Your Statistics</a>
          </h1>
        </div>
        <div className="navbar_flex">
          <h1>
            <button onClick={handleOpen}>Verify Your Account</button>
          </h1>
        </div>
      </div>

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form action="" onSubmit={submitData}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                onChange={(e) => setUserName(e.target.value)}
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                onChange={(e) => setUserEmail(e.target.value)}
              />

              <label htmlFor="number">Password</label>
              <input
                type="password"
                onChange={(e) => setUserPassowrd(e.target.value)}
              />
              <label htmlFor="message">Number</label>
              <input
                type="number"
                onChange={(e) => setUserNumber(e.target.value)}
              />
              <textarea
                cols="30"
                rows="10"
                onChange={(e) => setUserMessage(e.target.value)}
              ></textarea>

              <Button variant="contained" type="submit">
                Submit
              </Button>
            </form>
          </Box>
        </Modal>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default Navbar;
