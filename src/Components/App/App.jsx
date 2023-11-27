import { RouterProvider } from "react-router-dom";
import Pages from "../Router/Router";
import { Box } from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <RouterProvider router={Pages()} />
    </Box>
  );
}

export default App;
