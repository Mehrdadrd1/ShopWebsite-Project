import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/material";
import Theme from "../Theme/Theme";

const CheckBox = () => {
  const theme = Theme();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        mr: "10px",
      }}
    >
      <Checkbox
        sx={{
          padding: "0px",
        }}
      />
      <label
        htmlFor="Checkbox"
        style={{ color: theme.palette.background.paper }}
      >
        Remember ME
      </label>
    </Box>
  );
};

export default CheckBox;
