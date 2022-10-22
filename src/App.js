import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Home from './components/pages/Home/Home';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
