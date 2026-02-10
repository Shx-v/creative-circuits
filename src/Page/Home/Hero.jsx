import React from "react";
import { Box, Container, Typography, Stack, Button, Grid } from "@mui/material";

const Hero = () => {
  return (
    <Box
      sx={{
        minHeight: "85vh",
        background: "rgba(13, 23, 43, 0.85)",
      }}
    >
      <Grid container minHeight="85vh">
        <Grid
          size={{ xs: 12, md: 7 }}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Container maxWidth="sm">
            <Stack spacing={4}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  lineHeight: 1.1,
                  background:
                    "linear-gradient(120deg, #22d3ee, #38bdf8, #a855f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Circuits, Curiosity & Controlled Chaos
              </Typography>

              <Typography variant="h6" color="text.secondary">
                This is my playground for electronic experiments — from simple
                breadboard ideas to slightly questionable circuits that actually
                worked. Every project here started with a “what if…?”.
              </Typography>

              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  href="#circuits"
                  sx={{
                    background: "linear-gradient(120deg, #22d3ee, #a855f7)",
                  }}
                >
                  Explore Experiments
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  href="https://www.tinkercad.com"
                  target="_blank"
                >
                  How I Build Things
                </Button>
              </Stack>
            </Stack>
          </Container>
        </Grid>

        <Grid
          size={{ xs: 12, md: 5 }}
          sx={{
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src="/HeroGIF.gif"
            alt="Circuit experiment"
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(11,18,32,0.85) 0%, rgba(11,18,32,0.2) 40%, transparent 100%)",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
