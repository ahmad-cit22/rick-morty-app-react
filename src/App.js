import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./rootLayout/RootLayout";
import Home from "./pages/home/Home";
import Casts from "./pages/casts/Casts";
import DisplayCast from "./pages/displayCast/DisplayCast";
import Fetcher from "./components/fetchers/Fetcher";

const router = createBrowserRouter(
  createRoutesFromElements(
    //routes
    <Route
      path="/"
      element={<RootLayout />}
      // errorElement={
      //   <p className="text-[red] text-xl block text-center mt-3 absolute top-0 right-0 w-screen bg-white">
      //     Oops! There is an error loading data!
      //   </p>
      // }
    >
      <Route
        index
        element={<Home />}
        loader={async () => {
          const data = await Fetcher(
            "https://rickandmortyapi.com/api/character/?page=",
            1
          );
          return data;
        }}
        // errorElement={
        //   <p className="text-[red] text-xl block text-center mt-3 w-screen h-screen bg-white">
        //     Oops! There is an error loading data!
        //   </p>
        // }
      ></Route>

      <Route
        path={"/casts"}
        element={<Casts />}
        errorElement={
          <p className="text-[red] text-xl block text-center mt-3 absolute top-0 right-0 w-screen bg-white">
            There is an error loading data!
          </p>
        }
      ></Route>

      <Route
        path={"/castDetails"}
        element={<DisplayCast />}
        errorElement={
          <p className="text-[red] text-xl block text-center mt-3 absolute top-0 right-0 w-screen bg-white">
            There is an error loading data!
          </p>
        }
      ></Route>
    </Route>
    //routes
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
