import { Route, Routes } from 'react-router-dom';
import Carts from './pages/carts/carts';
import Category from './pages/category/category';
import DetailProduct from './pages/detailProduct/detailProduct';
import Home from './pages/homes';
import LoginPage from "./pages/login/Index";
import MyProfile from './pages/profile';
import RegisterPage from "./pages/registers";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/detail-product" element={<DetailProduct />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/carts" element={<Carts/>} />
        </Routes>
    </>
  ); 
}

export default App;
