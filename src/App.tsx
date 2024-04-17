import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/homes';
import Category from './pages/category/category';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
