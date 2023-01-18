import { Container } from "@mui/material";
import React from "react";
import Header from "../components/Header";

function BaseLayout({ children }) {
  return (
    <Container sx={{ p: 3 }} maxWidth="lg">
      <Header />
      {children}
    </Container>
  );
}

export default BaseLayout;
