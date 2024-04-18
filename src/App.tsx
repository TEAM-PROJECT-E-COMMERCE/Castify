import { Route, Routes } from "react-router-dom";
import Home from "./pages/homes";
import LoginPage from "./pages/login/Index";
import RegisterPage from "./pages/registers";

function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/login" element={<LoginPage/>} />
        </Routes>
    </>
  )
}

export default App
