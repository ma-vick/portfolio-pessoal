import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import "./index.css";
import Provider from "./context/Provider";

export default function App() {
  return (
    <Provider>
      <Header />
      <Outlet />
    </Provider>
  );
}
