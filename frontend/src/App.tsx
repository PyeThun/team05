import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import CustomerRegister from './pages/customerregister';
import HomePage from './pages/homepage';
import ReviewPage from './pages/profile/review';
import Admin from './pages/admin';
import EditProfilePage from './pages/EditProfilePage/EditProfilePage';
import CartPage from './pages/CartPage/CartPage';
import WishlistPage from './pages/WishlistPage/WishlistPage';
import PurchasePage from './pages/PurchasePage/PurchasePage';
import LoginPage from './pages/LoginPage/LoginPage';
import './App.css';

function App() {
  return (<>
    <Router>
      <Routes>
        <Route path='/register' Component={CustomerRegister}/>
        <Route path='/' Component={HomePage}/>
        <Route path='/review' Component={ReviewPage}/>
        <Route path='/admin' Component={Admin}/>
        <Route path="/EditProfile"      element={<EditProfilePage />} />
        <Route path="/Cart"      element={<CartPage />} />
        <Route path="/Wishlist"      element={<WishlistPage />} />
        <Route path="/Purchase"      element={<PurchasePage />} />
        <Route path="/Login"      element={<LoginPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
