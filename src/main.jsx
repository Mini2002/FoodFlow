import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Body from "./Body.jsx";
import About from "./About.jsx";
import Error from "./Error.jsx";
import Cart from "./Cart.jsx";
import Contact from "./Contact.jsx";
import RestaurantMenu from "./RestaurantMenu.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Provider} from "react-redux"
import appStore from "./utils/appStore.js";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
);
