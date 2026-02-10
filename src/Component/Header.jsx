import React from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import RealisticParticleEasterEgg from "./EasterEgg";
const Header = () => {
  return (
    <AppBar position="static" elevation={1}>
      <Toolbar>
        <Box component="img" src="/FullLogo.png" width={120} />

        <Box sx={{ flexGrow: 1 }} />

        <RealisticParticleEasterEgg />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
