import { createBrowserRouter } from "react-router";
import { Layout } from "@shared/components/Layout";
import { VVKRecords } from "@pages/VVKRecords";
import { RouterPaths } from "@shared/config/pagePaths";
import { VVKRecord } from "@pages/VVKRecord";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <VVKRecords /> },
      { path: RouterPaths.VVK_RECORD, element: <VVKRecord /> },
    ],
  },
]);
