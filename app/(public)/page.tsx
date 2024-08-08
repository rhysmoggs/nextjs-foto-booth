import { Box, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ height: "100vh", backgroundColor: "lightblue" }}
    >
      <Typography variant="h1">HomePage</Typography>
    </Box>
  );
};

export default HomePage;
