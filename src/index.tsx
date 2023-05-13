import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';


import Profile from './components/Profile/ProfilePage';
import Settings from './components/Settings/Settings';
import AddListing from './components/AddListing/AddListing';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ListingDetail from './components/ListingDetail/ListingDetail';

import './assets/style.css';



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/" element={<Profile />} />
        <Route path="/profile/settings" element={<Settings />} />
        <Route path="/addListing" element={<AddListing />} />
        <Route path="/listingDetail" element={<ListingDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}
