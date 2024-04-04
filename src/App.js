import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className='h-screen w-screen max-w-7xl'>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
