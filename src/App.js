import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import InitialTopScroll from './components/InitialTopScroll';



function App() {
  return (
    <>

      <Router>
        <InitialTopScroll />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/product/:id' element={<Product />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/cart' element={<Cart />} />
          {/* <Route exact path='' element={ } />
          <Route exact path='' element={ } /> */}

        </Routes>
      </Router>
    </>
  );
}

export default App;
