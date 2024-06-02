import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./Home/home"
import Register from "./Register/register"

function App() {
  const router = createBrowserRouter([
         {
           path: "",
           element: <Home/>
         },
         {
           path : "register",
           element: <Register/>
         }
   ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
