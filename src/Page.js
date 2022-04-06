import React from "react";
import TopBar from "./components/TopBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Box } from "@mui/material";

const Page = () => {
  return (
    <>
      <Box sx={{
        display:'flex',
        flexDirection:'column',
        height:"100vh",
        justifyContent:'space-between'
}}>
        <TopBar />
        <Main />
        <Footer />
      </Box>
    </>
  );
};

export default Page;
