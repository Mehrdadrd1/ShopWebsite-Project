import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "5px",
        position: "relative",
        bottom: 0,
        width: "100%",
        bgcolor: "color.quaternary",
      }}
    >
      <Typography sx={{}} variant="button" display="block" gutterBottom>
        All Rights Reserved.
        <br /> 2023-2024
      </Typography>
      <Typography sx={{}} variant="h6">
        React Shop Project Footer
      </Typography>
    </Box>
  );
};

export default Footer;
