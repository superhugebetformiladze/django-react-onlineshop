import React from 'react';
import MainPage from './pages/MainPage/MainPage';
import Layout from './components/common/Layout/Layout';


const App: React.FC = () => {
  return (
    <Layout>
      <MainPage />
    </Layout>
  );
}

export default App;
