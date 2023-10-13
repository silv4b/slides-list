import { Outlet } from "react-router-dom";
import "./App.css";
import Main from "./components/Main/Main";

function App() {
  return (
    <>
      <Outlet />
      <Main />
    </>
  );
}

export default App;
