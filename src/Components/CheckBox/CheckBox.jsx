import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/material";

const CheckBox = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <label htmlFor="Checkbox">Remember ME</label>
      <Checkbox />
    </Box>
  );
};

export default CheckBox;
