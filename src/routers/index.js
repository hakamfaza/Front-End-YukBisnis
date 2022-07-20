import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateStore from '../pages/CreateStore';
import Profile from '../pages/Profile';

export default function router() {
  return (
    <BrowserRouter>
      <Routes path="/">
        <Route index element={<CreateStore />} />
        <Route path="/profile/:id">
          <Route index element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
