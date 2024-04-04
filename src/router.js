import { createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Auth from './components/Auth';
import NotFound from './components/NotFound';
import App from './App';
import MyLists from './components/MyLists';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/my-lists',
        element: <MyLists />,
      },
      {
        path: '/auth',
        element: <Auth />,
      },
    ],
  },
]);

export default router;
