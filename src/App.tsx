import React from 'react';
import {
  BrowserRouter,
  Route,
  Navigate,
  Routes
} from "react-router-dom";

import './App.css';
import NavigationBar from './NavigationBar/NavigationBar';
import CalculationController from './pages/Calculation/CalculationController';
import MainPageController from './pages/MainPage/MainPageController';

const App = () => (
  <div className='app'>
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/main" element={<MainPageController />} />
        <Route path="/calculation" element={<CalculationController />} />
        <Route path="/info" element={<MainPageController />} />
        <Route path="*" element={<Navigate to="/main" replace />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
