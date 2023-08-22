import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import MonthStatistics from "./pages/MonthStatistics/MonthStatistics";
import Header from "./shared/Header/Header";

function App() {
  return (
    <div className="container">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/month-statistics' element={<MonthStatistics/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
