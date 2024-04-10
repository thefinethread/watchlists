import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className='max-w-7xl overflow-x-hidden flex flex-col'>
      <Header />
      <div className='w-full mt-[80px] px-4 h-full flex-1 overflow-y-hidden'>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
