import React from 'react';

const Banner = () => {
    return (
        <div className='relative mb-40 '>
          <div class="hero bg-[#9538E2] w-11/12 h-[500px]  rounded-lg mx-auto">
  <div class="hero-content text-center">
    <div class="lg:w-9/12">
      <h1 class="text-4xl font-bold text-white">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
      <p class="py-6 text-white text-base ">
      Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
      </p>
      <button class="btn  text-base outline-white lg:mb-28 mb-44  rounded-3xl text-[#9538E2]">Shop New</button>
    </div>
  </div>
  
</div>

        <div className='border border-white p-4  bg-white/25 absolute left-0 right-0 lg:-bottom-44 -bottom-52 rounded-xl  h-[350px] w-8/12 mx-auto'>
        <img src="https://i.ibb.co.com/pKvRr4p/banner.jpg" className='w-full h-full object-cover rounded-xl' alt="" srcset="" />
        </div>
        </div>

        
    );
};

export default Banner;