
import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const MainLayout = () => {
    return (
        <div>
            {/* Nanbar */}
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-300px)]'></div>
            {/* Banner */}
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;