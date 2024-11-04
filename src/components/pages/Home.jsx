import React from 'react';
import Banner from '../Banner';
import Heading from '../Heading';
import { Outlet, useLoaderData } from 'react-router-dom';
import Categories from '../Categories';


const Home = () => {
const categories = useLoaderData()


    return (
        <div className='flex flex-col'>
        <Banner></Banner>
        <Heading title={'Explore Cutting-Edge Gadgets'}></Heading>
       
       {/* Categories tab section */}
<Categories categories={categories}>

</Categories>
<Outlet></Outlet>
        </div>
    );
};

export default Home;