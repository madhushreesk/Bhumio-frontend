import AddPatient from "./components/AddPatient";
import EditPatient from "./components/EditPatient";
import Home from "./components/Home";
import { createBrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <AddPatient /> */}
      {/* <EditPatient /> */}
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/AddPatient",
    element: <AddPatient />,
  },
  {
    path: "/EditPatient",
    element: <EditPatient />,
  },
]);

export default App;
