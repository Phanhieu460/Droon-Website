import React from 'react'

import './App.css'
import Home from './pages/Home/Home'
import { Route, Routes, useLocation } from 'react-router-dom'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import Header from './components/UI/header/Header'
import Footer from './components/UI/footer/Footer'
import Login from './pages/Login-Register/Login'
import BreadCrumbs from './components/UI/BreadCrumb/BreadCrumbs'
import MyProfile from './components/My-Profile/Profile'
import Register from './pages/Login-Register/Register'
import CheckOut from 'pages/other/CheckOut'
import ViewCart from 'pages/other/ViewCart'
import PrivateRoute from 'util/PrivateRoute'
import ProductDetail from 'pages/Product-Detail/ProductDetail'
import ProductList from './pages/Product/ProductList'
import Shipping from 'pages/other/Shipping'
import Payment from 'pages/other/Payment'
import { Helmet } from 'react-helmet'
import { FloatButton } from 'antd'

function App() {
  const location = useLocation()
  return (
    <>
      {location.pathname !== '/' && location.pathname.split('/').filter(i => i).length === 1 && (
        <Helmet>{location.pathname.split('/').filter(i => i)[0]}</Helmet>
      )}

      <Header />
      {location.pathname !== '/' && location.pathname.split('/').filter(i => i).length === 1 && (
        <BreadCrumbs title={location.pathname.split('/').filter(i => i)[0]} href={location.pathname} />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="cart" element={<ViewCart />} />
        <Route element={<PrivateRoute />}>
          <Route path="checkout" element={<CheckOut />} />
          <Route path="profile" element={<MyProfile />} />
          <Route path="shipping" element={<Shipping />} />
          <Route path="payment" element={<Payment />} />
        </Route>
        <Route path="product" element={<ProductList />} />
        <Route path="product-detail/:productId" element={<ProductDetail />} />
      </Routes>

      <Footer />
      <FloatButton.BackTop />
    </>
  )
}

export default App
