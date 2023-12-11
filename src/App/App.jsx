import { RouterProvider } from "react-router-dom";
import Pages from "../Components/Router/Router";

const App = () => {
  return <RouterProvider router={Pages()} />;
};

export default App;
