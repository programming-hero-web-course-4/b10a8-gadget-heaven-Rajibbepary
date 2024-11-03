import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='text-center border-b-2 p-5 w-9/12 mx-auto'>
                <h2 className='lg:text-3xl text-xl font-bold text-black mb-2'>Gadget Heaven</h2>
                <p>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <footer className="footer bg-[#ffffff] mx-auto  justify-evenly text-base-content p-10">
  <nav>
    <h6 className="footer-title text-black">Services</h6>
    <a className="link link-hover">Product Support</a>
    <a className="link link-hover">Order Tracking</a>
    <a className="link link-hover">Shipping & Delivery</a>
    <a className="link link-hover">Returs</a>
  </nav>
  <nav>
    <h6 className="footer-title text-black">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Careers</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title text-black">Social</h6>
    <a className="link link-hover">Terms of Service</a>
    <a className="link link-hover">Privacy Policy</a>
    <a className="link link-hover">Cookie Policy</a>
         
  </nav>
</footer>
        </div>
    );
};

export default Footer;