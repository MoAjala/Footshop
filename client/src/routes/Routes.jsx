import React, { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";



const Home = lazy(() => import("../pages/Home"));
const Productdetail = lazy(() => import("../pages/Productdetail"));
const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: (
          <React.Suspense fallback={<p>loading...</p>}>
            <Home />
          </React.Suspense>
        ),
      },
      {
        path: "product/:slug",
        element: (
          <React.Suspense fallback={<p>loading...</p>}>
            <Productdetail />
          </React.Suspense>
        ),
      },
    ],
  },
];

export default function Routes() {
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}
