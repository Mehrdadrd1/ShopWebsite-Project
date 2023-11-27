import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/material";

const CheckBox = () => {
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
      <label htmlFor="Checkbox">Remember ME</label>
    </Box>
  );
};

export default CheckBox;
