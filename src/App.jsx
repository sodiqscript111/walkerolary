
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Routes
} from "react-router-dom";
import Home from './components/Home/home';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
]);

function App() {
 

  return (
  <div> <RouterProvider router={router} /></div>
  )
}

export default App
