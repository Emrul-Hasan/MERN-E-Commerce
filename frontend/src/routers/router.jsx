import {
    createBrowserRouter
  } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import CategoryPage from "../pages/category/CategoryPage";
import Serach from "../pages/search/Serach";
import ShopPage from "../pages/shop/ShopPage";
import SingleProduct from "../pages/shop/productDetails/SingleProduct";
import Login from "../components/Login";
import Register from "../components/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        { path: "/",element: <Home/>},
        { path:"/categories/:categoryName", element:<CategoryPage/>},
        { path:"/search", element:<Serach/>},
        { path:"/shop", element:<ShopPage/>},
        { path:"/shop/:id", element:<SingleProduct/>}

      ],
    },
    {
      path: "/login", element: <Login></Login>
    },

    {
      path: "/register", element: <Register></Register>
    }
  ]);

  export default router;