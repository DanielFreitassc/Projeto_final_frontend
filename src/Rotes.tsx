import { createBrowserRouter } from "react-router-dom";
import Home from "./screens/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Login } from "./screens/Login";
import { AuthProvider } from "./context/AuthProvider";
import { AutorizacaoProvider } from "./context";
import { User } from "./screens/User";
import { UsersList } from "./screens/UsersList";

export const AppRoutes = createBrowserRouter([
  {
    path: "/home",
    element: (
      <div>
      <AutorizacaoProvider>
      <Header/>
      <Home/>
      <Footer/>
      </AutorizacaoProvider>
      </div>
    )
  },
  {
    path:"/",
    element: (
      <AuthProvider>
        <Login/>
      </AuthProvider>
    )
  },
  {
    path:"/users",
    element:(
        <AutorizacaoProvider>
          <Header/>
          <User/>
          <Footer/>
        </AutorizacaoProvider>
     
    )
  },
  {
    path:"/users-list",
    element:(
      <div>

        <Header/>
        <UsersList/>
        <Footer/>
      </div>
      
    )
  }
]);
