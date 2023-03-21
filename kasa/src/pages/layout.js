import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';


const Layout = () => {
    return (
      <div className="Layout">
        <Header />
        <Banner />
        <Outlet></Outlet>
        <Footer />
      </div>
    );
};

export default Layout;