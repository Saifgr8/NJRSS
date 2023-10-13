import { Button } from "@mui/material";
import React, { useState } from "react";
import ModalAbout from "./ModalAbout";

const About = () => {
  const [openPopup, setopenPopup] = useState(false);
  return (
    <>
      <Button variant="contained" onClick={() => setopenPopup(true)}>Click me</Button>
      <ModalAbout openModal = {openPopup} setOpenModal = {setopenPopup}/>
    </>
  );
};

export default About;
