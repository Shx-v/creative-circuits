import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Stack,
  Chip,
} from "@mui/material";
import { LuExternalLink } from "react-icons/lu";

const CircuitCard = ({ name, description, image, url, components = [] }) => {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 6,
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={name}
        sx={{
          objectFit: "cover",
          backgroundColor: "background.paper",
        }}
      />

      {/* Content */}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
          {name}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {description}
        </Typography>

        <Stack direction="row" gap={1} flexWrap="wrap" marginTop={2}>
          {components.map((component, index) => (
            <Chip
              key={index}
              label={component}
              variant="outlined"
              size="small"
            />
          ))}
        </Stack>
      </CardContent>

      {/* Actions */}
      <CardActions sx={{ px: 2, pb: 2 }}>
        <Button
          size="small"
          endIcon={<LuExternalLink />}
          href={url}
          target="_blank_"
          rel="noopener noreferrer"
        >
          View Circuit
        </Button>
      </CardActions>
    </Card>
  );
};

export default CircuitCard;
