import React from "react";
import useFetch from "./useFetch";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

const Main = () => {
  const { data, loading, error, refetch } = useFetch(
    "https://animechan.vercel.app/api/random"
  );
  if (loading)
    return (
      <>
        <Box sx={{
          textAlign:'center'
        }}>
          <CircularProgress size={80} sx={{ verticalAlign: "middle" }} />
        </Box>
      </>
    );
  if (error) console.log(error);
  return (
    <>
      <Paper
        elevation={4}
        sx={{
          my: 2,
          p: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" color="primary" sx={{ textAlign: "center",fontFamily:'Open Sans' }}>
          Anime:
        </Typography>
        <Typography
          variant="h4"
          color="initial"
          sx={{ textAlign: "center", fontFamily:'Fredoka' }}
          gutterBottom
        >
          {data?.anime}
        </Typography>
        <Typography variant="h3" color="primary" sx={{ textAlign: "center",fontFamily:'Open Sans' }}>
          Character:
        </Typography>
        <Typography
          variant="h4"
          color="initial"
          sx={{ textAlign: "center", fontFamily:'Fredoka' }}
          gutterBottom
        >
          {data?.character}
        </Typography>
        <Typography variant="h3" color="primary" sx={{ textAlign: "center",fontFamily:'Open Sans' }}>
          Quote:
        </Typography>
        <Typography variant="h5" sx={{ textAlign: "center",fontFamily:'Lora' }} color="initial">
          " {data?.quote} "
        </Typography>
        <Box
          sx={{
            textAlign: "center",
            mt: 4,
          }}
        >
          <Button size="large" variant="contained" onClick={refetch}>
            Reload
          </Button>
        </Box>
      </Paper>
    </>
  );
};

export default Main;
