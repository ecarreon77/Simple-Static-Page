import React from "react";
import {
  Box,
  Grid,
  Stack,
  Divider,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";
import { FooterItem, FooterLinkItem } from "../components/styled.Item";
import { BsLinkedin } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import goldLogo from "../assets/images/ElizGold.png";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  const facebook = "";
  const instagram = "";
  const linkedin = "";
  const aboutus = "";
  const locations = "";

  const handleOpenExternalURL = (externalURL) => {
    window.open(externalURL, "_blank");
  };
  const handleOpenInternalURL = () => {
    navigate("/");
  };
  return (
    <Toolbar
      sx={{
        position: "relative",
        bottom: 0,
        width: "100%",
        height: "auto",
        backgroundColor: "primary.main",
        // color: "black",
      }}
    >
      {/* Grid for Links */}
      <Grid
        container
        // spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 12, sm: 8, md: 6 }}
        py={4}
      >
        <Grid item sm={4} md={3} sx={{ display: { xs: "none", md: "flex" } }}>
          <FooterLinkItem sx={{ verticalAlign: "middle" }}>
            <Stack
              direction="row"
              divider={
                <Divider orientation="vertical" flexItem color="#d9d9d9" />
              }
              spacing={2}
            >
              <FooterLinkItem
                sx={{ cursor: "pointer" }}
                onClick={() => handleOpenExternalURL(aboutus)}
              >
                ABOUT US
              </FooterLinkItem>
              <FooterLinkItem
                sx={{ cursor: "pointer" }}
                onClick={() => handleOpenExternalURL(locations)}
              >
                LOCATIONS
              </FooterLinkItem>

              <FooterLinkItem
                sx={{ cursor: "pointer" }}
                onClick={handleOpenInternalURL}
              >
                CONTACT US
              </FooterLinkItem>

              <FooterLinkItem
                sx={{ cursor: "pointer" }}
                onClick={handleOpenInternalURL}
              >
                CAREERS
              </FooterLinkItem>
            </Stack>
          </FooterLinkItem>
        </Grid>
        {/* {/ Grid for Social Icons /} */}
        <Grid
          item
          sm={4}
          md={3}
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "flex-end",
          }}
        >
          <FooterItem>
            <Stack direction="row" spacing={2}>
              <IconButton
                aria-label="linkedin"
                onClick={() => handleOpenExternalURL(linkedin)}
              >
                <BsLinkedin size="35px" color="secondary.light" />
              </IconButton>
              <IconButton
                aria-label="facebook"
                onClick={() => handleOpenExternalURL(facebook)}
              >
                <ImFacebook size="35px" color="secondary.light" />
              </IconButton>
              <IconButton
                aria-label="instagram"
                onClick={() => handleOpenExternalURL(instagram)}
              >
                <RiInstagramFill size="35px" color="secondary.light" />
              </IconButton>
            </Stack>
          </FooterItem>
        </Grid>
        {/* {/ Grid for Logo /} */}
        <Grid item xs={12} sm={4} md={3}>
          <Stack
            sx={{
              width: { xs: "70%", md: "30%" },
            }}
          >
            <FooterItem
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "left" },
              }}
            >
              <Box
                component="img"
                src={goldLogo}
                alt="logo"
                sx={{
                  width: "100%",
                }}
              />
            </FooterItem>
            <FooterItem
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },
                width: "100%",
                textAlign: "right",
                pr: "5%",
              }}
            >
              <Typography variant="body2" sx={{ fontSize: "14px" }}>
                version 1.0.0
              </Typography>
            </FooterItem>
          </Stack>
        </Grid>
        {/* {/ Grid for Rights /} */}
        <Grid item xs={12} sm={4} md={3}>
          <FooterItem sx={{ mt: 1 }}>
            <Stack sx={{ textAlign: { xs: "center", md: "right" } }}>
              <Typography variant="oswaldbody">
                © {new Date().getFullYear()} Eliz Gold
              </Typography>
              <Typography variant="oswaldbody">All Rights Reserved</Typography>
            </Stack>
          </FooterItem>
        </Grid>
        {/* For Mobile View  */}
        <Grid
          item
          xs={12}
          sx={{
            display: { xs: "flex", md: "none" },
            justifyContent: "center",
            mt: 2,
          }}
        >
          <FooterItem sx={{ verticalAlign: "middle" }}>
            <Stack
              direction="row"
              divider={
                <Divider orientation="vertical" flexItem color="#d9d9d9" />
              }
              spacing={2}
            >
              <Typography
                variant="caption"
                sx={{ cursor: "pointer" }}
                onClick={() => handleOpenExternalURL(aboutus)}
              >
                ABOUTS US
              </Typography>
              <Typography
                variant="caption"
                sx={{ cursor: "pointer" }}
                onClick={() => handleOpenExternalURL(locations)}
              >
                LOCATIONS
              </Typography>
              <Typography
                variant="caption"
                sx={{ cursor: "pointer" }}
                onClick={handleOpenInternalURL}
              >
                CONTACT US
              </Typography>
              <Typography
                variant="caption"
                sx={{ cursor: "pointer" }}
                onClick={handleOpenInternalURL}
              >
                CAREERS
              </Typography>
            </Stack>
          </FooterItem>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: { xs: "flex", md: "none" },
            justifyContent: "center",
          }}
        >
          <FooterItem>
            <Stack direction="row" spacing={2}>
              <IconButton
                aria-label="linkedin"
                onClick={() => handleOpenExternalURL(linkedin)}
              >
                <BsLinkedin size="20px" color="secondary.light" />
              </IconButton>
              <IconButton
                aria-label="facebook"
                onClick={() => handleOpenExternalURL(facebook)}
              >
                <ImFacebook size="20px" color="secondary.light" />
              </IconButton>
              <IconButton
                aria-label="instagram"
                onClick={() => handleOpenExternalURL(instagram)}
              >
                <RiInstagramFill size="20px" color="secondary.light" />
              </IconButton>
            </Stack>
          </FooterItem>
        </Grid>
      </Grid>
    </Toolbar>
  );
};

export default AboutUs;
