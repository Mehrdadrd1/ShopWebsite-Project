import { RouterProvider } from "react-router-dom";
import Pages from "../Router/Router";

function App() {
  return <RouterProvider router={Pages()} />;
}

export default App;
