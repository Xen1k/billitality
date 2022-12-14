import React from 'react';
import {
  BrowserRouter,
  Route,
  Navigate,
  Routes
} from "react-router-dom";

import './App.scss';
import NavigationBar from './components/NavigationBar/NavigationBar';
import CalculationController from './pages/Calculation/CalculationController';
import MainPageController from './pages/MainPage/MainPageController';
import TransactionsController from './pages/Transactions/TransactionsController';

const App = () => (
  <div className='app'>
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/main" element={<MainPageController />} />
        <Route path="/calculation" element={<CalculationController />} />
        <Route path="/info" element={<MainPageController />} />
        <Route path="/transactions" element={<TransactionsController />} />
        <Route path="*" element={<Navigate to="/main" replace />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
