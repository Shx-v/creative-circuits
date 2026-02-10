import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#4f9cff",
      light: "#7bb6ff",
      dark: "#2563eb",
      contrastText: "#ffffff",
    },

    secondary: {
      main: "#94a3b8",
      light: "#cbd5e1",
      dark: "#64748b",
      contrastText: "#0f172a",
    },

    error: { main: "#ef4444" },
    warning: { main: "#f59e0b" },
    info: { main: "#38bdf8" },
    success: { main: "#22c55e" },

    background: {
      default: "#0b1220",
      paper: "#111827",
    },

    text: {
      primary: "#e5e7eb",
      secondary: "#9ca3af",
      disabled: "#6b7280",
    },

    divider: "#1f2937",
  },
});
