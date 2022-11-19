import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Diagram from './pages/Diagram';
import List from './pages/List';
import NavMain from './components/NavMain';
import JobNew from './pages/JobNew';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './stylesheets/index.scss';
import JobTableItem from './components/JobTableItem';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <NavMain />
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path="diagram" element={<Diagram />}></Route>
      <Route path="list">
        <Route index element={<List />}></Route>
        <Route path="new" element={<JobNew />}></Route>
        <Route path=":id" element={<JobTableItem />}></Route>
      </Route>

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
