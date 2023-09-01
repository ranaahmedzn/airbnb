import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home/Home/Home.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import App from './App';
import RoomsProvider from './providers/RoomsProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RoomsProvider>
      <RouterProvider router={router} />
    </RoomsProvider>
  </React.StrictMode>,
)
