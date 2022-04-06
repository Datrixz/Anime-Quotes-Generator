import { Box, Container, Divider, Typography } from "@mui/material";
import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          pt: 1,
          pb: 2,
        }}
      >
        <Divider />

        <Container
          bgcolor="primary"
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <CopyrightIcon /> All Rights Reserved (Pranjal)
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
