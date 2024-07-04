import { Box } from "@mui/material";
import React from "react";
import Footer from "./Footer";
import DrawerAppBar from "./Header";

const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <DrawerAppBar /> {/* This renders the header/navigation */}
      <Box sx={{ marginTop: "2%" }}>{children}</Box> {/* This renders the main content */}
      <Footer /> {/* This renders the footer */}
    </>
  );
};

export default Layout;
