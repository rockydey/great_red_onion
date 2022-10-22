import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound/NotFound';
import Home from './components/pages/Home/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
