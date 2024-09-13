import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import Paper from "@mui/material/Paper";
import InfoIcon from "@mui/icons-material/Info";
import AppRoutes from "../routes";

const Navigation = () => {
  const [value, setValue] = useState(0);
  const appRoutesRef = useRef(null); // Reference to access the scroll method

  const handleNavigationChange = (event, newValue) => {
    setValue(newValue);

    // Handle navigation based on the selected tab
    switch (newValue) {
      case 0:
        appRoutesRef.current.scrollToSection("header"); // Scroll to Header
        break;
      case 1:
        appRoutesRef.current.scrollToSection("home"); // Scroll to Home
        break;
      case 2:
        appRoutesRef.current.scrollToSection("aboutUs"); // Scroll to About Us
        break;
      default:
        break;
    }
  };

  return (
    <Box sx={{ pb: 7 }}>
      <CssBaseline />
      {/* Pass the ref to AppRoutes */}
      <AppRoutes ref={appRoutesRef} />
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={handleNavigationChange}
        >
          <BottomNavigationAction
            label="Header"
            icon={<ViewCarouselIcon fontSize="large" />}
          />
          <BottomNavigationAction
            label="Home"
            icon={<HomeIcon fontSize="large" />}
          />
          <BottomNavigationAction
            label="About Us"
            icon={<InfoIcon fontSize="large" />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default Navigation;
