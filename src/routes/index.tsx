import { Navigate, useRoutes } from "react-router-dom";
import { ListingPage, DetailsPage } from "@pages";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <ListingPage />, // Main page listing all universities
      index: true,
    },
    {
      path: "/university-details/:id", // Detail view for a specific university
      element: <DetailsPage />,
    },
    {
      path: "*", // Catch-all for any undefined routes
      element: <Navigate to="/" replace />,
    },
  ]);
}
