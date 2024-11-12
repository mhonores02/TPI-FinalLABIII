import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Protected from "./Components/Protected/Protected";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import Register from "./Components/register/Register";
import CartHeader from "./Components/Cart/CartHeader";
import ProductListCart from "./Components/Cart/ProductListCart";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [countProducts, setCountProducts] = useState(0);
  const [total, setTotal] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Función para obtener productos de la API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setAllProducts(data);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };

    fetchProducts();
  }, []);

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  // Rutas
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          {/* Carrito */}
          <CartHeader
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts}
          />

          {/* Lista de productos */}
          <ProductListCart
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts}
          />

          {/* Dashboard protegido */}
          <Protected isSignedIn={isLoggedIn}>
            <Dashboard setIsLoggedIn={setIsLoggedIn} />
          </Protected>
        </>
      ),
    },
    {
      path: "/login",
      element: <Login onLogin={loginHandler} />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
