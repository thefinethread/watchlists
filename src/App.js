import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className='max-w-7xl w-full overflow-x-hidden  flex flex-col h-screen'>
      <Header />
      <div className='w-full mt-[80px] px-4   flex-1 '>
        <Outlet />
      </div>
      <ToastContainer autoClose={1500} />/
    </div>
  );
};

export default App;
