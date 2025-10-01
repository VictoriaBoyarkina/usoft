import { VVKRecord } from "@pages/VVKRecord";
import { VVKRecords } from "@pages/VVKRecords";
import { Layout } from "@shared/components/Layout";
import { RouterPaths } from "@shared/config/pagePaths";
import { createBrowserRouter } from "react-router";

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
