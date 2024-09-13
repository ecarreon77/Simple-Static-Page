import React from "react";
import image from "../assets/images/headerImage.png";
import { Box } from "@mui/material";

const Header = () => {
  // return <div>Header</div>;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <img src={image} alt="Logo" style={{ height: 600, objectFit: "cover" }} />
    </Box>
    //   <div>
    //     <img
    //       src={image}
    //       alt="Header Banner"
    //       style={{
    //         width: "100%",
    //         height: "500px" /* Adjust height as needed */,
    //         objectFit: "cover",
    //       }}
    //     />
    //   </div>
  );
};

export default Header;
