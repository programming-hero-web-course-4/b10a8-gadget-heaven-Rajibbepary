
import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            {/* Nanbar */}
            <Navbar></Navbar>
            {/* Banner */}
            
            <div className='min-h-[calc(100vh-440px)] py-20'>
                <Outlet></Outlet>
            </div>
            {/* footer */}
            <Footer></Footer>
            

        </div>
    );
};

export default MainLayout;