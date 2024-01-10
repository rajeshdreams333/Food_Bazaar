import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestoCard from "./components/Restocard";
import RestoMenu from "./components/RestoMenu";

const AppLout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },{
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/resto/:Id",
        element:<RestoMenu/>
      }
    ],
    errorElement:<Error/>
  },
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
