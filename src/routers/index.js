import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateStore from '../pages/CreateStore';

export default function router() {
  return (
    <BrowserRouter>
      <Routes path="/">
        <Route index element={<CreateStore />} />
      </Routes>
    </BrowserRouter>
  );
}
