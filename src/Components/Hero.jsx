import { Box, Typography } from "@mui/material";
import React from "react";

export default function Hero() {
  return (
    <Box
      sx={{
        width: "110%",
        height: "90vh",
        backgroundImage: "url('/back.webp')", // Add your background image path
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.6)", // Adds shadow to the entire section
      }}
    >
      {/* Dark Overlay Effect */}
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          background: "rgba(0, 0, 0, 0.5)", // Dark overlay for better text readability
          zIndex: 1,
        }}
      />

      {/* Content Box */}
      <Box
        sx={{
          width: "100%",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Typography
          sx={{
            fontWeight: "900",
            fontSize: { xs: "50px", sm: "80px" },
            textTransform: "uppercase",
            color: "#ffffff",
            textShadow: "2px 4px 6px rgba(0, 0, 0, 0.7)", // Adds shadow effect to text
          }}
          gutterBottom
        >
        
        </Typography>
        <Typography
          gutterBottom
          sx={{
            fontWeight: "900",
            fontSize: "20px",
            color: "#ffffff",
            textShadow: "2px 3px 4px rgba(0, 0, 0, 0.5)", // Subtle text shadow
          }}
        >
          Your One-Stop Shopping Destination!
        </Typography>
        <Typography
          gutterBottom
          sx={{
            width: "80%",
            fontWeight: "600",
            color: "#ffffff",
            textShadow: "1px 2px 3px rgba(0, 0, 0, 0.4)", // Light text shadow for readability
          }}
        >
          Experience the best products at unbeatable prices with Shop Mart.
        </Typography>
      </Box>
    </Box>
  );
}
