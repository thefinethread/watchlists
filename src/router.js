import { createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import App from './App';
import { lazy, Suspense } from 'react';
import Spinner from './components/Spinner';

// lazy load
const Auth = lazy(() => import('./components/Auth'));
const NotFound = lazy(() => import('./components/NotFound'));
const Movie = lazy(() => import('./components/Movie'));
const MyWatchList = lazy(() => import('./components/MyWatchList'));

const LoadComponent = ({ component }) => {
  return <Suspense fallback={<Spinner />}>{component}</Suspense>;
};

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
        element: <LoadComponent component={<MyWatchList />} />,
      },
      {
        path: '/movies/:id',
        element: <LoadComponent component={<Movie />} />,
      },
      {
        path: '/auth',
        element: <LoadComponent component={<Auth />} />,
      },
    ],
  },
]);

export default router;
