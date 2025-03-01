import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const Banner = () => {
  return (
    <Box
      sx={{
        width: "100vw", // Full Width
        minHeight: "30vh", // Expanding Height
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 4,
        py: 6,
        backgroundColor: "#F0F0F0", // Light Gray background for a neutral look
      }}
    >
      <Grid container alignItems="center" justifyContent="center" spacing={2}>
        {/* Left Content */}
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              textAlign: "center",
              maxWidth: "800px", // Ensures good readability
              borderRadius: 2,
              padding: 4,
              backgroundColor: "#003366", // Midnight Blue for the box background
              color: "#FFFFFF", // White text inside the box for good contrast
              boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
            }}
          >
            {/* Title */}
            <Typography variant="h2" sx={{ fontWeight: "bold", color: "#FF6F61" }}>
              Discover. Shop. Enjoy!
            </Typography>

            {/* Subtitle */}
            <Typography
              variant="h5"
              sx={{
                color: "#FF6F61", // Coral Red for Subtitle
                fontWeight: "bold",
                mt: 2,
              }}
            >
              Your Favorite Brands at Unbeatable Prices!
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
