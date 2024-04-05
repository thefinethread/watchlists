import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className='h-screen w-screen max-w-7xl'>
      <Header />
      <div className='max-w-7xl px-4 h-[calc(100%-80px)]'>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
