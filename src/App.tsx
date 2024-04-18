import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/homes';
import Category from './pages/category/category';
import LoginPage from "./pages/login/Index";
import RegisterPage from "./pages/registers";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/login" element={<LoginPage/>} />
        </Routes>
    </>
  );
}

export default App;
