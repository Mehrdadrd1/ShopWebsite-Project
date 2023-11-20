import { RouterProvider } from "react-router-dom";

import "./App.css";
import Pages from "../Router/Router";

function App() {
  return (
    <div className="App">
      <RouterProvider router={Pages()} />
    </div>
  );
}

export default App;
