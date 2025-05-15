import {
  Paper,
  Stack,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const ProductCard = ({ id, title, description, thumbnail }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Paper
      component={motion.div}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      elevation={2}
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: isMobile ? "100%" : "85%",
        height: "280px", // Slightly increased height
        padding: 2,
        gap: 2,
        cursor: "pointer",
        overflow: "hidden",
        mb: 3,
      }}
      style={{ marginLeft: "7.5%" }}
    >
      {/* Left: Text Content */}
      <Stack
        spacing={1}
        sx={{
          flex: 1,
          height: "100%",
          justifyContent: "space-around",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "black",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}
        >
          {title}
        </Typography>

        <Typography
        // sx={{
        //   overflow: "hidden",
        //   textOverflow: "ellipsis",
        //   display: "-webkit-box",
        //   WebkitBoxOrient: "vertical",
        //   WebkitLineClamp: 3,
        // }}
        >
          {description}
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#B23F3F",
            "&:hover": {
              backgroundColor: "#8A2C2C",
            },
            textTransform: "none",
            width: "fit-content",
            mt: 10, // 👈 Adds space between description and button
          }}
          onClick={() =>
            navigate("/demanderDevis", {
              state: { productId: id, productTitle: title },
            })
          }
        >
          Demander un devis
        </Button>
      </Stack>


      {/* Right: Image */}
      <Stack
        sx={{
          width: "300px", // Increased width
          height: "100%", // Full height
          overflow: "hidden",
          flexShrink: 0,
        }}
        onClick={() => navigate(`/product-details/${id}`)}
      >
        <img
          src={thumbnail?.Location}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </Stack>
    </Paper>


  );
};
