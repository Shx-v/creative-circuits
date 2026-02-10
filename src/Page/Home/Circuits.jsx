import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import { handleGetCircuits } from "../../Util/store";
import CircuitCard from "./CircuitCard";

const Circuits = () => {
  const circuits = handleGetCircuits();

  return (
    <Box
      id="circuits"
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box mb={4}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              mb: 1,
              background: "linear-gradient(to right, #a855f7, #22d3ee)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Experiments & Circuits
          </Typography>

          <Typography variant="body1" color="text.secondary" maxWidth={520}>
            A growing collection of circuits I built out of curiosity — some
            planned, some improvised, all hands-on.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {circuits.map((circuit) => (
            <Grid size={{ xs: 12, sm: 6 }} key={circuit.id}>
              <CircuitCard
                name={circuit.name}
                description={circuit.description}
                image={circuit.image}
                url={circuit.url}
                components={circuit.components}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Circuits;
