import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.scss';
import AboutPage from './components/AboutPage/AboutPage';
import BlogDetailsPage from './components/BlogDetailsPage/BlogDetailsPage';
import BlogPage from './components/BlogPage/BlogPage';
import CartPage from './components/CartPage/CartPage';
import CheckoutPage from './components/CheckoutPage/CheckoutPage';
import CommingSoon from './components/CommingSoon/CommingSoon';
import ContactPage from './components/ContactPage/ContactPage';
import EmptyCartPage from './components/EmptyCartPage/EmptyCartPage';
import EmptyWishlist from './components/EmptyCartPage/EmptyWishlist';
import ErrorPage from './components/ErrorPage/ErrorPage';
import FaqPage from './components/FaqPage/FaqPage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import LandingPage2 from './components/LandingPage2/LandingPage2';
import Login from './components/Login/Login';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import Refund from './components/PrivacyPolicy/Refund';
import Terms from './components/PrivacyPolicy/Terms';
import ProductDetail from './components/ProductDetail/ProductDetail';
import ShopPage from './components/ShopPage/ShopPage';
import SignUp from './components/SignUp/SignUp';
import WhishListPage from './components/WhishListPage/WhishListPage';
import { Spinner } from 'reactstrap';
import axios from 'axios';

import FilterPage from './components/FilterPage/FilterPage';

function App() {
  const [data, setData] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios.get('https://vistothemes.com/themes/shop-visto/')
    .then((re) => {
      setIsLoading(false)
      setData(re.data.result)
    })
  }, [])
  console.log(data);
  return (
    <>
      {IsLoading && (
        <div className="loader">
          <Spinner color="white" />
        </div>
      )}
      <Header
        WishProductNum={6}
        AddProductNum={6}
        TotalProductsPrice="$200"
      />
      <Routes>
        <Route
          path="/"
          exact={true}
          element={<LandingPage />}
        />
        <Route
          path="/landing-page2"
          exact={true}
          element={<LandingPage2 />}
        />
        <Route
          path="/contact"
          exact={true}
          element={<ContactPage />}
        />
        <Route
          path="/login"
          exact={true}
          element={<Login />}
        />
        <Route
          path="/signup"
          exact={true}
          element={<SignUp />}
        />
        <Route
          path="/faq"
          exact={true}
          element={<FaqPage />}
        />
        <Route
          path="/404"
          exact={true}
          element={<ErrorPage />}
        />
        <Route
          path="/blog"
          exact={true}
          element={<BlogPage />}
        />
        <Route
          path="/blog-details"
          exact={true}
          element={<BlogDetailsPage />}
        />
        <Route
          path="/about"
          exact={true}
          element={<AboutPage />}
        />
        <Route
          path="/wishlist"
          exact={true}
          element={<WhishListPage />}
        />
        <Route
          path="/cart"
          exact={true}
          element={<CartPage />}
        />
        <Route
          path="/checkout"
          exact={true}
          element={<CheckoutPage />}
        />
        <Route
          path="/shop"
          exact={true}
          element={<ShopPage />}
        />
        <Route
          path="/comming_soon"
          exact={true}
          element={<CommingSoon />}
        />
        <Route
          path="/empty_cart"
          exact={true}
          element={<EmptyCartPage />}
        />
        <Route
          path="/empty_wishlist"
          exact={true}
          element={<EmptyWishlist />}
        />
        <Route
          path="/privacy"
          exact={true}
          element={<PrivacyPolicy />}
        />
        <Route
          path="/terms"
          exact={true}
          element={<Terms />}
        />
        <Route
          path="/refund"
          exact={true}
          element={<Refund />}
        />
        <Route
          path="/product_details"
          exact={true}
          element={<ProductDetail />}
        />
        <Route
          path="/filter"
          exact={true}
          element={<FilterPage />}
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App