import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/rootLayout";
import Home from "./pages/home";
import SubBooks from "./pages/subBooks";
import SubReviews from "./pages/subReviews";
import UpcomingEvents from "./pages/theDkArhturCanon";
import GetinTouch from "./pages/getinTouch";
import About from "./pages/about";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },

        {
          path: "about",
          element: <About/>,
        },
        {
          path: "books",
          element: <SubBooks />,
        },
        {
          path: "reviews",
          element: <SubReviews />,
        },
        {
          path: "theDkArthurCanon",
          element: <UpcomingEvents />,
        },
        {
          path: "contact",
          element: <GetinTouch />,
        },
       
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
export default App;
