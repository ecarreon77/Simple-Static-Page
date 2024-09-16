import React, { useEffect, useState } from "react";
import { mockDatabase } from "../mockDatabase";
import { useTheme } from "@emotion/react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import Diamond from "@mui/icons-material/Diamond";

const Earring = () => {
  const [earrings, setEarrings] = useState([]);

  useEffect(() => {
    setEarrings(mockDatabase.earrings);
  }, []);

  const theme = useTheme();

  return (
    <div>
      <Typography variant="h1" align="center" sx={{ mb: 4 }}>
        Earrings
      </Typography>
      <Grid container spacing={3}>
        {earrings.map((earring) => (
          <Grid item xs={12} sm={6} md={4} key={earring.id}>
            <Card sx={{ display: "flex" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    {earring.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{ color: "text.secondary" }}
                  >
                    Price: PM
                  </Typography>
                </CardContent>
                <Box
                  sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                >
                  <IconButton aria-label="previous">
                    <Diamond />
                  </IconButton>
                  <IconButton aria-label="play/pause">
                    <Diamond sx={{ height: 38, width: 38 }} />
                  </IconButton>
                  <IconButton aria-label="next">
                    <Diamond />
                  </IconButton>
                </Box>
              </Box>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={earring.imageUrl} // Replace this with the correct image URL
                alt={earring.name}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Earring;
