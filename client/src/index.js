import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Diagram from './components/Diagram';
import List from './components/List';
import NavMain from './components/NavMain';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './stylesheets/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <NavMain /> 
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/diagram" element={<Diagram />}></Route>
      <Route path="/list" element={<List />}></Route>
      <Route
        path="*"
        element={
          <main style={{ padding: '1rem' }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>
);
