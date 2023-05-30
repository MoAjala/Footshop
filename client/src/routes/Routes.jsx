import React, { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Spinner from "../utils/spinner";
import Account from "../pages/Account";
import Checkout from "../pages/Checkout";
import Privateroutes from "./Privateroutes";
import Checkoutdetails from "../pages/Checkoutdetails";
import Order from "../pages/Order";
import Customer from "../pages/Customer";
import Orderdetail from "../pages/Orderdetail";
const Home = lazy(() => import("../pages/Home"));
const ProductDetail = lazy(() => import("../pages/Productdetail"));
const SearchResult = lazy(() => import("../pages/SearchResult"));
const Products = lazy(() => import("../pages/Products"));
const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: (
          <React.Suspense fallback={<Spinner />}>
            <Home />
          </React.Suspense>
        ),
      },
      {
        path: "/products/category/:name",
        element: (
          <React.Suspense fallback={<Spinner />}>
            <Products />
          </React.Suspense>
        ),
      },
      {
        path: "/products/:slug",
        element: (
          <React.Suspense fallback={<Spinner />}>
            <ProductDetail />
          </React.Suspense>
        ),
      },
      {
        path: "account",
        element: <Account />,
      },
      {
        path: "search",
        element: (
          <React.Suspense fallback={<Spinner />}>
            <SearchResult />
          </React.Suspense>
        ),
      },
      {
        path: "checkout",
        element: (
          <Privateroutes>
            <Checkout />
          </Privateroutes>
        ),
        children: [
          {
            path: "checkoutdetails",
            element: (
              <Privateroutes>
                <Checkoutdetails />
              </Privateroutes>
            ),
          },
        ],
      },
      {
        path: "customer",
        element: (
          <Privateroutes>
            <Customer />
          </Privateroutes>
        ),
        children: [
          {
            path: "orders",
            element: (
              <React.Suspense fallback={<Spinner />}>
                <Privateroutes>
                  <Order />
                </Privateroutes>
              </React.Suspense>
            ),
            children: [
              {
                path: ":id",
                element: (
                  <React.Suspense fallback={<Spinner />}>
                    <Privateroutes>
                      <Orderdetail />
                    </Privateroutes>
                  </React.Suspense>
                ),
              },
            ],
          },
        ],
      },
    ],
  },
];

const Routes = () => {
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};

export default Routes;
