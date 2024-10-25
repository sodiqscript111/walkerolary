import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/home';
import Ouracademy from './components/Ouracademy/ouracademy';
import ScrollToTop from './components/Scrooltotop'; // Import the ScrollToTop component

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/academy",
    element: <Ouracademy />,
  },
]);

function App() {
  return (
    <div>
      <ScrollToTop /> {/* Add this component */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
