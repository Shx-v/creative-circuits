import { lazy, Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Layout } from "../Layout";
import Loader from "../Component/Loader";

const HomePage = lazy(() => import("../Page/Home/Home"));
const CircuitPage = lazy(() => import("../Page/Circuit/Circuit"));

export const routes = [
  {
    element: (
      <Suspense fallback={<Loader />}>
        <Layout>
          <Outlet />
        </Layout>
      </Suspense>
    ),
    path: "*",
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        index: "circuit",
        element: <CircuitPage />,
      },
      {
        path: "*",
        element: <div>Page Not Found</div>,
      },
    ],
  },
];
