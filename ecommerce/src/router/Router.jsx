//Application router
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CategoryPage from "../pages/CategoryPage";
import ProductPages from "../pages/ProductPages";
import Cart from "../pages/Cart";

//Creat a browser router
const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/cart", element: <Cart /> },
      { path: "/product/*", element: <ProductPages /> },
      { path: "/", element: <CategoryPage /> },
    ],
  },
]);

export default router;
