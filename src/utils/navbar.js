import React from "react";
import Signin from "../pages/Register";

const NewsPage = React.lazy(() => import("../pages/News"));
const GalleryPage = React.lazy(() => import("../pages/Gallery"));
const QabulPage = React.lazy(() => import("../pages/Qabul"));

export const navbar = [
  {
    id: 1,
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
    id: 2,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <QabulPage />{" "}
      </React.Suspense>
    ),
    title: "Qabul",
    path: "/qabul",
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
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <GalleryPage />{" "}
      </React.Suspense>
    ),
    title: "Bog'lanish",
    path: "/contact",
    private: false,
    hidden: false,
  },
  {
    id: 5,
    element: <Signin />,
    title: "Kirish",
    path: "/login",
    private: false,
    hidden: true,
  },
];
