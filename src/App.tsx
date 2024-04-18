import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/homes';
import Category from './pages/category/category';
import LoginPage from "./pages/login/Index";
import RegisterPage from "./pages/registers";
import Checkout from './pages/checkout/checkout';
import DetailProduct from './pages/detailProduct/detailProduct';

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/detail-product" element={<DetailProduct />} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/checkout" element={<Checkout/>} />
        </Routes>
    </>
  );
}

export default App;
