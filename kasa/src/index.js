import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css';
import Home from './pages/home';
import Apropos from './pages/a_propos'
import reportWebVitals from './reportWebVitals';
import Error from './pages/Error'
import Fiche from './pages/fiche_logement'
import Header from './components/Header'
import Footer from './components/Footer'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fiche_logement/:id" element={<Fiche />} />
          <Route path="/a_propos" element={<Apropos />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
