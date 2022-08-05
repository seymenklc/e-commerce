import React from 'react';
import { Routes, Route } from 'react-router-dom';
// components
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
// pages
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';
import ProductDetails from './pages/ProductDetails';

export default function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/login'
            element={<Login />}
          />
          <Route
            path='/signup'
            element={<Signup />}
          />
          <Route
            path='/product/:id'
            element={<ProductDetails />}
          />
          {/* Protected Routes */}
          <Route element={<PrivateRoute />}>
            <Route
              path='/profile'
              element={<Profile />}
            />
            <Route
              path='/favorites'
              element={<Favorites />}
            />
            <Route
              path='/cart'
              element={<Cart />}
            />
          </Route>
        </Routes>
      </main>
    </React.Fragment>
  );
}