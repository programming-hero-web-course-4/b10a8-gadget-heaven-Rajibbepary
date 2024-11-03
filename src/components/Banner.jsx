import React from 'react';

const Banner = () => {
    return (
        <div className='relative '>
          <div class="hero bg-[#9538E2] w-11/12 h-[500px]  rounded-lg mx-auto">
  <div class="hero-content text-center">
    <div class="w-9/12">
      <h1 class="text-4xl font-bold text-white">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
      <p class="py-6 text-white text-base ">
      Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
      </p>
      <button class="btn  text-base outline-white">Shop New</button>
    </div>
  </div>
  
</div>

        <div className='hero absolute left-0 right-0 -bottom-52 object-cover rounded-xl  bg-banner bg-base-200 min-h-[300px] w-8/12 mx-auto'></div>
        </div>

        
    );
};

export default Banner;