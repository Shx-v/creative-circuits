import { styled, useTheme } from "@mui/material/styles";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

const HEADER_HEIGHT = 8;

const LayoutRoot = styled("div")({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  backgroundColor: "#f4f6f8",
});

const LayoutContainer = styled("div")(({ theme }) => ({
  flex: "1 1 auto",
  display: "flex",
  flexDirection: "column",
  // alignItems: "center",
  // justifyContent: "center",
  backgroundColor: theme.palette.background.default,
}));

export const Layout = ({ children }) => {
  const theme = useTheme();

  return (
    <LayoutRoot>
      <Header />
      <LayoutContainer>
        {children}
        <Footer />
      </LayoutContainer>
    </LayoutRoot>
  );
};
