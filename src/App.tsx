import { Route, Routes } from 'react-router-dom';
import Category from './pages/category/category';
import Home from './pages/homes';
import LoginPage from "./pages/login/Index";
import RegisterPage from "./pages/registers";
import MyProfile from './pages/profile';

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/myProfile" element={<MyProfile />} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/login" element={<LoginPage/>} />
        </Routes>
    </>
  );
}

export default App;
