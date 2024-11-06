
import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';
import  { Toaster } from 'react-hot-toast';


const MainLayout = () => {
    return (
        <div>
             <Toaster />
            {/* Nanbar */}
            <Navbar></Navbar>
            {/* Banner */}
            
            <div className='min-h-[calc(100vh-440px)] py-20 container mx-auto px-12'>
                <Outlet></Outlet>
            </div>
            {/* footer */}
            <Footer></Footer>
            

        </div>
    );
};

export default MainLayout;