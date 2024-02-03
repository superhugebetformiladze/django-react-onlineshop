import React from 'react';
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage';
import ProductPage from './pages/ProductPage/ProductPage';
import Layout from './components/common/Layout/Layout';


function App() {
  return (
    <Layout>
      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
