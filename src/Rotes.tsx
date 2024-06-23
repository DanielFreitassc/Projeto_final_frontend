import { createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Login } from "./screens/Login";
import { AuthProvider } from "./context/AuthProvider";
import { AutorizacaoProvider } from "./context";
import { User } from "./screens/User";
import { UsersList } from "./screens/UsersList";
import { ProductsList } from "./screens/Products/List";

export const AppRoutes = createBrowserRouter([
  
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
      <>

        <Header/>
        <UsersList/>
        <Footer/>
      </>
      
    )
  },
  {
    path:'/products',
    element: (
      <>
       <AutorizacaoProvider>

        <Header/>
          <ProductsList />
        <Footer/>
       </AutorizacaoProvider>
      </>
    )
  }
]);
