import NavBar from "../NavBar/NavBar";
import { Box, Typography } from "@mui/material";
import Theme from "../Theme/Theme";

const Header = () => {
  const theme = Theme();
  return (
    <Box
      sx={{
        display: "flex",
        padding: "5px",
        flexDirection: "column",
        bgcolor: theme.palette.color.scondary,
      }}
    >
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        React Shop Website
      </Typography>
      <NavBar />
    </Box>
  );
};
export default Header;
