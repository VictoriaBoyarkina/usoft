import { createBrowserRouter } from "react-router";
import { Layout } from "@shared/components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
]);
