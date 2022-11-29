import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Order from './Components/Order/Order';
import Register from './Components/Register/Register';
import LogIn from './Components/LogIn/LogIn';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/product' element={<Products></Products>}></Route>
        <Route path='/order' element={<Order></Order>} ></Route>
        <Route path='/register' element={<Register></Register>} ></Route>
        <Route path='/login' element={<LogIn></LogIn>} ></Route>


      </Routes>
      
    </div>
  );
}

export default App;
