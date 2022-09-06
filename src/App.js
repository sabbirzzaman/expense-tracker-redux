import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AllTransactions from './pages/AllTransactions';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='all-transactions' element={<AllTransactions />} />
    </Routes>
  );
}

export default App;
