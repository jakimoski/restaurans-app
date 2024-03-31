import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import RootLayout from "../pages/RootLayout/RootLayput";
import RestaurantDetails from "../pages/RestaurantDetails/RestaurantDetails";
import CuisineDetail from "../pages/CuisineDetail/CuisineDetail";
import Favorites from "../pages/Favorites/Favorites";
import ErrorPage from "../pages/Error/ErrorPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "restaurant-details/:id",
        element: <RestaurantDetails />,
      },
      { path: "cuisine/:id", element: <CuisineDetail /> },
      { path: "favorites", element: <Favorites /> },
    ],
  },
]);
