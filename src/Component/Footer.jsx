import React from "react";
import { Box, Container, Typography, Stack, IconButton } from "@mui/material";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { CgWebsite } from "react-icons/cg";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        mt: 8,
        borderTop: 1,
        borderColor: "divider",
        backgroundColor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="body2" color="text.secondary">
            Built with curiosity, wires, and a bit of chaos.
          </Typography>

          <Stack direction="row" spacing={1}>
            <IconButton
              component="a"
              href="https://shxv-dev.onrender.com/"
              target="_blank_"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <CgWebsite size={18} />
            </IconButton>

            <IconButton
              component="a"
              href="https://github.com/Shx-v"
              target="_blank_"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <LuGithub size={18} />
            </IconButton>

            <IconButton
              component="a"
              href="https://in.linkedin.com/in/shivranjan-bharadwaj-b87b70245"
              target="_blank_"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LuLinkedin size={18} />
            </IconButton>

            <IconButton
              component="a"
              href="https://x.com/Shiv_bharadwaj_"
              target="_blank_"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
            >
              <FaXTwitter size={18} />
            </IconButton>
          </Stack>

          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} • Circuit Experiments
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
