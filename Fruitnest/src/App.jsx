import React, { Suspense } from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './Context/CartContext';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

const Home = React.lazy(() => import('./Pages/Home/Home'));
const Shop = React.lazy(() => import('./Pages/Shop/Shop'));
const About = React.lazy(() => import('./Pages/About/About'));
const Review = React.lazy(() => import('./Pages/Review/Review'));
const Blog = React.lazy(() => import('./Pages/Blog/Blog'));
const Contact = React.lazy(() => import('./Pages/Contact/Contact'));
const Login = React.lazy(() => import('./Pages/Login/Login'));
const Cart = React.lazy(() => import('./Pages/Cart/Cart'));
const Signup = React.lazy(() => import('./Pages/SignUp/Signup'));

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <CartProvider>
          <Header />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/" element={<Home />} />
              <Route exact path="/shop" element={<Shop />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/review" element={<Review />} />
              <Route exact path="/blog" element={<Blog />} />
              <Route exact path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
          <Footer />
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;
