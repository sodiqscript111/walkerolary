
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Routes
} from "react-router-dom";
import Home from './components/Home/home';
import Ouracademy from './components/Ouracademy/ouracademy';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/academy",
    element: <Ouracademy/>,
  },
]);

function App() {
 

  return (
  <div> <RouterProvider router={router} /></div>
  )
}

export default App
