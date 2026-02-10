import React from "react";
import { Box, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100vw"
      bgcolor={"#0b1220"}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;
