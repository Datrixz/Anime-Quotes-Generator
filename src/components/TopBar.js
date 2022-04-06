import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function TopBar() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ textAlign: "center" }}>
          <Typography
            variant="h2"
            component="div"
            sx={{ flexGrow: 1, fontFamily: "Bangers", my:1 }}
          >
            Anime Quotes
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
