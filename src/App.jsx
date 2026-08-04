import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/rootLayout";
import SubAbout from "./pages/about/subAbout";
import Home from "./pages/home";
import SubBooks from "./pages/books/subBooks";
import SubReviews from "./pages/reviews/subReviews";
import UpcomingEvents from "./pages/events/upcomingEvents";
import GetinTouch from "./pages/contacts/getinTouch";
import LoginPage from "./pages/logIn/loginPage";


function App() {
  const router = createBrowserRouter ([
    {
      path: '/',
      element: <RootLayout/>,
      children: [
        {
          index: true,
          element: <Home/>
        },
       
        {
          index: 'about',
          element: <SubAbout/>
        },
        {
          index: 'books',
          element: <SubBooks/>
        },
        {
          index: 'reviews',
          element: <SubReviews/>
        },
        {
          index: 'events',
          element: <UpcomingEvents/>
        },
        {
          index: 'contact',
          element: <GetinTouch/>
        },
        {
          index: 'login',
          element: <LoginPage/>
        }
      ]
    }
  ])
  return (
     <RouterProvider router = {router} />
  )
 
}
export default App