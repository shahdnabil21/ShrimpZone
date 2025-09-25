import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import Menu from "./components/Menu/Menu";
import { CartContextProvider } from "./components/Context/CartContext";
import Cart from "./components/Cart/Cart";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/", 
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "menu", element: <Menu/> },
         { path: "cart", element: <Cart/> }

      ],
    },
  ]);

    return (
    <CartContextProvider>
      <RouterProvider router={router} />
      </CartContextProvider>

  ); 
}
