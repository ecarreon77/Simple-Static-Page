import React from "react";
import image from "../assets/images/ElizGold.png";
import { Box, useMediaQuery } from "@mui/material";

const Header = () => {
  // return <div>Header</div>;
  const isXs = useMediaQuery("(max-width:600px)");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <img
        src={image}
        alt="Logo"
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </Box>
  );
};

export default Header;
