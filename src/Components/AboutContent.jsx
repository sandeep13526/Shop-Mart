import { Box, Grid2, Typography } from "@mui/material";
import React from "react";

export default function AboutContent() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid2
        container
        sx={{
          background: "linear-gradient(135deg, rgba(0, 123, 255, 0.3), rgba(255, 165, 0, 0.3))", // Blue-Orange Gradient
          borderRadius: "20px",
        }}
      >
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <img
            src="./martlogo.jpg"
            alt="ShopCart Logo"
            style={{ width: "100%", borderRadius: "20px" }}
          />
        </Grid2>
        <Grid2
          size={{ xs: 12, sm: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              p: 3,
              textAlign: "center",
            }}
          >
            {/* Title */}
            <Typography gutterBottom sx={{ fontWeight: "900", fontSize: "30px" }}>
              About <span style={{ color: "#0D6EFD" }}>Us</span>
            </Typography>

            {/* Content */}
            <Typography variant="body2" gutterBottom sx={{ textAlign: "justify" }}>
              <strong>ShopCart</strong> is a user-friendly e-commerce platform designed to simplify online shopping. Whether you're looking for the latest <strong>electronics</strong>, trendy <strong>fashion</strong>, or everyday <strong>home essentials</strong>, <strong>ShopCart</strong> provides a seamless shopping experience with just a few clicks.
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ textAlign: "justify" }}>
              Our goal is to offer a wide variety of products at competitive prices, all while ensuring easy navigation and a secure checkout process for customers. With a focus on user satisfaction, <strong>ShopCart</strong> is built to offer fast delivery, reliable customer service, and a personalized shopping experience.
            </Typography>

            {/* Call to Action */}
            <Typography variant="body2" sx={{ fontWeight: "600", mt: 2 }}>
              Start shopping with <strong>ShopCart</strong> today and experience the difference!
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}
