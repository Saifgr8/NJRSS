import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import ErrorMsg from "./components/ErrorMsg";
import Contact from "./components/Contact";
import RestMenu from "./components/RestMenu";
import Shimmer from "./components/shimmer";
// import Villamart from "./components/Villamart"; //called as default import

const VillamartDynamic = lazy(() => import("./components/Villamart"));
//This is called as lazy loading/ dynamic import/ chuncking, this will create a seperate
//.js file for villamart component give the component is very huge

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorMsg />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant/:id",
        element: <RestMenu />,
      },
      {
        path: "/villamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <VillamartDynamic />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
