import { createBrowserRouter } from "react-router-dom";
import Home from "./screens";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
      <Header/>
      <Home/>
      <Footer/>
      </div>
    ),
  },
]);
