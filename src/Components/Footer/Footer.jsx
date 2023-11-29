import { Box, Typography } from "@mui/material";
import Theme from "../Theme/Theme";
const Footer = () => {
  const theme = Theme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "5px",
        bgcolor: theme.palette.color.scondary,
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
