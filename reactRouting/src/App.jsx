import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ParamComp from "./components/ParamComp";
import NotFound from "./components/NotFound";
import Course from "./components/Course";
import Mock from "./components/Mock";
import Exam from "./components/Exam";

const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: (
      <div>
        <Navbar></Navbar>
        <Home></Home>
      </div>
    ),
  },
  {
    path: "/About",
    element: (
      <div>
        <Navbar></Navbar>
        <About></About>
      </div>
    ),
  },
  {
    path: "/Dashboard", //parent route
    element: (
      <div>
        <Navbar></Navbar>
        <Dashboard></Dashboard>
      </div>
    ),
    children: [
      {
        path: "courses",
        element: <Course></Course>,
      },
      {
        path: "mock",
        element: <Mock></Mock>,
      },
      {
        path: "exam",
        element: <Exam></Exam>,
      },
    ],
  },
  {
    path: "/student/:id",
    element: (
      <div>
        <Navbar></Navbar>
        <ParamComp></ParamComp>
      </div>
    ),
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

/*
steps:
1: import createBrowserRouter, RouterProvider
2: create components
3: create paths/routes ie. router = createBrowserRouter([{path, element},{},{}])
4. pass value inside with router provider
*/

/*
using Link-to for moving between pages
*/

/*
NavLink:
prefered most beacuse it has isActive flag link using this we can perform styling
*/

/*
useParams:
used with route parameters (id)
*/

/*
nested routing
used outet component in the parent component
dont used " / " while  create route in children  /mock->wrong
*--> used show error msg when user go to unknown page
*/
