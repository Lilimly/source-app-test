import './style/App.scss';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage.tsx';
import { RankingPage } from './pages/RankingPage.tsx';

function App() {
  const [isLogged, setIsLogged] = useState(false);
  console.log('isLogged', isLogged)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage setIsLogged={setIsLogged} />} />
        <Route path="/ranking" element={<RankingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
