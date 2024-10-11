import React from "react";
import Signin from "../pages/Register";

const HomePage = React.lazy(() => import("../pages/Home"));
const NewsPage = React.lazy(() => import("../pages/News"));
const GalleryPage = React.lazy(() => import("../pages/Gallery"));

export const navbar = [
  {
    id: 1,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <HomePage />{" "}
      </React.Suspense>
    ),
    title: "Asosiy",
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: 2,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <NewsPage />{" "}
      </React.Suspense>
    ),
    title: "Yangiliklar",
    path: "/news",
    private: false,
    hidden: false,
  },
  {
    id: 3,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <GalleryPage />{" "}
      </React.Suspense>
    ),
    title: "Gallerya",
    path: "/gallery",
    private: false,
    hidden: false,
  },
  {
    id: 4,
    element: <Signin />,
    title: "Sign In",
    path: "/signin",
    private: false,
    hidden: true,
  },
];
