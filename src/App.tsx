import { Route, Routes } from 'react-router-dom';
import Category from './pages/category/category';
import Home from './pages/homes';
import LoginPage from "./pages/login/Index";
import RegisterPage from "./pages/registers";
<<<<<<< HEAD
import MyProfile from './pages/profile';
=======
import Carts from './pages/carts/carts';
import DetailProduct from './pages/detailProduct/detailProduct';
>>>>>>> e0a0976607633ea257773a408664ae0eb0f31bd5

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
<<<<<<< HEAD
          <Route path="/myProfile" element={<MyProfile />} />
=======
          <Route path="/detail-product" element={<DetailProduct />} />
>>>>>>> e0a0976607633ea257773a408664ae0eb0f31bd5
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/carts" element={<Carts/>} />
        </Routes>
    </>
  );
}

export default App;
