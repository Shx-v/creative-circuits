import React, { useState, useEffect } from "react";
import { Button, Box } from "@mui/material";

const RealisticParticleEasterEgg = () => {
  const [particles, setParticles] = useState([]);
  const [visible, setVisible] = useState(() => {
    const saved = localStorage.getItem("visible");
    return saved === "true";
  });

  const handleClick = () => {
    const origins = Array.from({ length: 3 }).map(() => ({
      x: Math.random() * window.innerWidth * 0.8 + window.innerWidth * 0.1,
      y: Math.random() * window.innerHeight * 0.6 + window.innerHeight * 0.2,
    }));

    const newParticles = [];
    origins.forEach((origin) => {
      Array.from({ length: 60 }).forEach(() => {
        const angle = Math.random() * 2 * Math.PI;
        const speed = Math.random() * 20 + 5;

        const color =
          Math.random() < 0.2
            ? `hsl(${Math.random() * 360}, 100%, 80%)`
            : `hsl(${Math.random() * 360}, 100%, 60%)`;

        newParticles.push({
          id: Math.random(),
          x: origin.x,
          y: origin.y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed * -1,
          size: Math.random() * 6 + 4,
          color,
          life: 0,
        });
      });
    });

    setParticles(newParticles);
    setVisible(true);
  };

  useEffect(() => {
    if (particles.length === 0) return;

    let animationFrame;

    const animate = () => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vy: p.vy + 0.3, // gravity
            life: p.life + 1,
          }))
          .filter((p) => p.y < window.innerHeight && p.life < 100),
      );

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [particles]);

  useEffect(() => {
    localStorage.setItem("visible", visible);
  }, [visible]);

  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleClick}
        sx={{
          opacity: visible ? 1 : 0.1,
          zIndex: 999,
        }}
      >
        ⚡
      </Button>

      <Box
        component="svg"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          overflow: "visible",
          zIndex: 1000,
        }}
      >
        {particles.map((p) => (
          <circle key={p.id} cx={p.x} cy={p.y} r={p.size} fill={p.color} />
        ))}
      </Box>

      <style>
        {`
          @keyframes fadeInOut {
            0% { opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { opacity: 0; }
          }
        `}
      </style>
    </>
  );
};

export default RealisticParticleEasterEgg;
