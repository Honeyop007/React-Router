import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/home.jsx';
import About from './components/About/about.jsx';
import Contact from './components/ContactUs/contact.jsx';
import User from './components/User/user.jsx';
import Github, { githubinfo } from './components/Github/github.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'user/:userid',
        element: <User/>
      },
      {
        loader: githubinfo,
        path: 'github',
        element: <Github/>
      }
        ]
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);